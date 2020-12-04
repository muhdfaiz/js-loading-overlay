class JSLoadingOverlay
{
    constructor() {
        this.options = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner',
            'offsetY': 0,
            'offsetX': 0,
            'lockScroll': false,
            'containerID': null,
            'spinnerZIndex': 99999,
            'overlayZIndex': 99998
        };
        this.stylesheetBaseURL = 'https://cdn.jsdelivr.net/npm/load-awesome@1.1.0/css/';
        this.spinner = null;
        this.spinnerStylesheetURL = null;
        this.numberOfEmptyDivForSpinner = {
            'ball-8bits' : 16,
            'ball-atom': 4,
            'ball-beat': 3,
            'ball-circus': 5,
            'ball-climbing-dot': 1,
            'ball-clip-rotate': 1,
            'ball-clip-rotate-multiple': 2,
            'ball-clip-rotate-pulse': 2,
            'ball-elastic-dots': 5,
            'ball-fall': 3,
            'ball-fussion': 4,
            'ball-grid-beat': 9,
            'ball-grid-pulse': 9,
            'ball-newton-cradle': 4,
            'ball-pulse': 3,
            'ball-pulse-rise': 5,
            'ball-pulse-sync': 3,
            'ball-rotate': 1,
            'ball-running-dots': 5,
            'ball-scale': 1,
            'ball-scale-multiple': 3,
            'ball-scale-pulse': 2,
            'ball-scale-ripple': 1,
            'ball-scale-ripple-multiple': 3,
            'ball-spin': 8,
            'ball-spin-clockwise' : 8,
            'ball-spin-clockwise-fade' : 8,
            'ball-spin-clockwise-fade-rotating' : 8,
            'ball-spin-fade' : 8,
            'ball-spin-fade-rotating' : 8,
            'ball-spin-rotate' : 2,
            'ball-square-clockwise-spin' : 8,
            'ball-square-spin' : 8,
            'ball-triangle-path' : 3,
            'ball-zig-zag' : 2,
            'ball-zig-zag-deflect' : 2,
            'cog' : 1,
            'cube-transition' : 2,
            'fire' : 3,
            'line-scale' : 5,
            'line-scale-party' : 5,
            'line-scale-pulse-out' : 5,
            'line-scale-pulse-out-rapid' : 5,
            'line-spin-clockwise-fade' : 8,
            'line-spin-clockwise-fade-rotating' : 8,
            'line-spin-fade' : 8,
            'line-spin-fade-rotating' : 8,
            'pacman' : 6,
            'square-jelly-box' : 2,
            'square-loader' : 1,
            'square-spin' : 1,
            'timer' : 1,
            'triangle-skew-spin' : 1,
        }
    }

    /**
     * Show loading overlay including the spinner.
     *
     * @param options
     */
    show(options) {
        // Override default options if options parameter exist.
        this.setOptions(options);

        // Add spinner stylesheet from https://cdn.jsdelivr.net in head.
        this.addSpinnerStylesheet();

        // Generate spinner html element.
        this.generateSpinnerElement();

        if (this.options.lockScroll) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        }

        // Generate overlay html element in full page.
        this.generateAndAddOverlayElement();
    }

    /**
     * Hide Loading Overlay
     */
    hide() {
        // Unlock scroll.
        if (this.options.lockScroll) {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        var stylesheet = document.getElementById('loading-overlay-stylesheet');

        // Remove stylesheet.
        if (stylesheet) {
            stylesheet.disabled = true;
            stylesheet.parentNode.removeChild(stylesheet);

            document.getElementById(this.options.overlayIDName).remove();
            document.getElementById(this.options.spinnerIDName).remove();
        }
    }

    /**
     * Override default options with user specified options.
     *
     * @param options
     */
    setOptions(options) {
        if (typeof options !== 'undefined') {
            for (let key in options) {
                this.options[key] = options[key];
            }
        }
    }

    /**
     * Generate overlay html element in full page.
     * - class name
     * - background color
     * - opacity
     *
     * @returns {string}
     */
    generateAndAddOverlayElement() {
        let left = '50%';

        // Check if spinner X offset not zero
        if (this.options.offsetX !== 0) {
            left = 'calc(50% + ' + this.options.offsetX + ')'
        }

        let top = '50%';

        // Check if spinner Y offset not zero
        if (this.options.offsetY !== 0) {
            top = 'calc(50% + ' + this.options.offsetY + ')'
        }

        // Generate overlay html element in container.
        if (this.options.containerID && document.body.contains(document.getElementById(this.options.containerID))) {
            let loadingOverlay = `<div id="${this.options.overlayIDName}" style="display: block !important; position: absolute; top: 0; left: 0; overflow: auto; opacity: ${this.options.overlayOpacity}; background: ${this.options.overlayBackgroundColor}; z-index: 50; width: 100%; height: 100%;"></div><div id="${this.options.spinnerIDName}" style="display: block !important; position: absolute; top: ${top}; left: ${left}; -webkit-transform: translate(-50%); -ms-transform: translate(-50%); transform: translate(-50%); z-index: 9999;">${this.spinner}</div>`

            let containerID = document.getElementById(this.options.containerID);

            containerID.style.position = 'relative';
            containerID.insertAdjacentHTML('beforeend', loadingOverlay);
            return;
        }

        let loadingOverlay = `<div id="${this.options.overlayIDName}" style="display: block !important; position: fixed; top: 0; left: 0; overflow: auto; opacity: ${this.options.overlayOpacity}; background: ${this.options.overlayBackgroundColor}; z-index: ${this.options.overlayZIndex}; width: 100%; height: 100%;"></div><div id="${this.options.spinnerIDName}" style="display: block !important; position: fixed; top: ${top}; left: ${left}; -webkit-transform: translate(-50%); -ms-transform: translate(-50%); transform: translate(-50%); z-index: ${this.options.spinnerZIndex};">${this.spinner}</div>`

        // Insert the overlay html element in body.
        document.body.insertAdjacentHTML("beforeend", loadingOverlay);
    }

    /**
     * Generate spinner html element. Spinner html element must follow template from https://github.danielcardoso.net/load-awesome/
     */
    generateSpinnerElement()
    {
        let emptyDivKey = Object.keys(this.numberOfEmptyDivForSpinner).find(element => element === this.options.spinnerIcon);

        let emptyDivElement = this.generateEmptyDivElement(this.numberOfEmptyDivForSpinner[emptyDivKey]);

        this.spinner = `<div style="color: ${this.options.spinnerColor}" class="la-${ this.options.spinnerIcon } la-${this.options.spinnerSize}">${ emptyDivElement }</div>`
    }

    /**
     * Add spinner stylesheet tag in head section.
     * All stylesheet URL are from CDN. Using Load Awesome CSS Spinner.
     *
     * @see https://github.danielcardoso.net/load-awesome/
     * @see https://www.jsdelivr.com/package/npm/load-awesome?path=css
     */
    addSpinnerStylesheet() {
        this.setSpinnerStylesheetURL();

        let link = document.createElement('link');
        link.setAttribute('id', 'loading-overlay-stylesheet');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', this.spinnerStylesheetURL);

        document.getElementsByTagName('head')[0].appendChild(link);
    }

    /**
     * Set spinner stylesheet based on the icon specify in options.
     * All stylesheet URL are from CDN. Using Load Awesome CSS Spinner.
     *
     * @see https://github.danielcardoso.net/load-awesome/
     * @see https://www.jsdelivr.com/package/npm/load-awesome?path=css
     *
     * @returns {string}
     */
    setSpinnerStylesheetURL() {
        this.spinnerStylesheetURL = this.stylesheetBaseURL + this.options.spinnerIcon + '.min.css'
    }

    /**
     * Generate empty div element for spinner element.
     *
     * @param numberOfEmptyDiv
     * @returns {string}
     */
    generateEmptyDivElement(numberOfEmptyDiv) {
        let emptyDivElement = '';

        for (let i=1; i <= numberOfEmptyDiv; i++) {
            emptyDivElement += '<div></div>'
        }

        return emptyDivElement;
    }
}

window.JsLoadingOverlay = new JSLoadingOverlay();

module.exports = JsLoadingOverlay;