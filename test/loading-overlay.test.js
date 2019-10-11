const LoadingOverlay = require('../src/loading-overlay');

let loadingOverlay;

beforeEach(() => {
    loadingOverlay = new LoadingOverlay();
    document.body.innerHTML = '';
    document.head.innerHTML = '';
});

describe('generateEmptyDivElement function', () => {
   test('It should generate 6 empty div element', () => {
       let numberOfEmptyDivToGenerate = 6;

        let emptyDivElements = loadingOverlay.generateEmptyDivElement(numberOfEmptyDivToGenerate);

        document.body.innerHTML = emptyDivElements;
        expect(document.getElementsByTagName('div').length).toEqual(numberOfEmptyDivToGenerate);
    });

    test('It should generate 0 empty div element', () => {
        let numberOfEmptyDivToGenerate = 0;

        let emptyDivElements = loadingOverlay.generateEmptyDivElement(numberOfEmptyDivToGenerate);

        expect(emptyDivElements).toEqual('');
    });
});

describe('setSpinnerStylesheetURL function', () => {
    test('It should set correct stylesheet for spinner icon ball-spin-clockwise', () => {
        let spinnerIcon = 'ball-spin-clockwise';

        loadingOverlay.options = {
            'spinnerIcon': spinnerIcon,
        };

        loadingOverlay.setSpinnerStylesheetURL();

        expect(loadingOverlay.stylesheetBaseURL + spinnerIcon + '.min.css').toEqual(loadingOverlay.spinnerStylesheetURL);
    });

    test('It should set valid stylesheet url for spinner icon ball-atom', async () => {
        let spinnerIcon = 'ball-atom';

        loadingOverlay.options = {
            'spinnerIcon': spinnerIcon,
        };

        loadingOverlay.setSpinnerStylesheetURL();

        expect(loadingOverlay.spinnerStylesheetURL).toEqual(loadingOverlay.stylesheetBaseURL + spinnerIcon + '.min.css');

        async function urlExists(url){
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status == 200;
        }

        let stylesheetURLExist = await urlExists(loadingOverlay.spinnerStylesheetURL);
        expect(stylesheetURLExist).toBeTruthy();
    });

    test('It should set incorrect stylesheet when spinner icon is invalid', async () => {
        let spinnerIcon = 'test-icon';

        loadingOverlay.options = {
            'spinnerIcon': spinnerIcon,
        };

        loadingOverlay.setSpinnerStylesheetURL();

        expect(loadingOverlay.spinnerStylesheetURL).toEqual(loadingOverlay.stylesheetBaseURL + spinnerIcon + '.min.css');

        async function urlExists(url){
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status == 200;
        }

        let stylesheetURLExist = await urlExists(loadingOverlay.spinnerStylesheetURL);
        expect(stylesheetURLExist).toBeFalsy();
    });
});

describe('addSpinnerStylesheet function', () => {
    test('It should add spinner stylesheet for spinner icon ball-spin-clockwise in the header', () => {
        let spinnerIcon = 'ball-spin-clockwise';

        loadingOverlay.options = {
            'spinnerIcon': spinnerIcon,
        };

        loadingOverlay.addSpinnerStylesheet();

        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);
    });
});

describe('generateSpinnerElement function', () => {
    test('It should generate correct spinner element', () => {
        let spinnerIcon = 'ball-spin-clockwise';
        let spinnerColor = 'rgb(236, 236, 236)';
        let spinnerSize = 'small';

        loadingOverlay.options = {
            'spinnerIcon': spinnerIcon,
            'spinnerColor': spinnerColor,
            'spinnerSize': spinnerSize,
        };

        loadingOverlay.generateSpinnerElement();

        document.body.innerHTML = loadingOverlay.spinner;
        expect(document.getElementsByClassName('la-' + spinnerIcon).length).toEqual(1);
        expect(document.getElementsByClassName('la-' + spinnerSize).length).toEqual(1);
        expect(document.getElementsByClassName('la-' + spinnerSize)[0].style.color).toEqual(spinnerColor);
    })
});

describe('generateOverlayElement function', () => {
    test('It should generate correct overlay element', () => {
        let overlayBackgroundColor = 'rgb(0, 0, 0)';
        let overlayOpacity = "0.6";
        let spinnerIcon = 'ball-spin-clockwise';
        let spinnerColor = 'rgb(236, 236, 236)';
        let spinnerSize = 'small';
        let overlayIDName = 'overlay';
        let spinnerIDName = 'spinner';

        loadingOverlay.options = {
            'overlayBackgroundColor': overlayBackgroundColor,
            'overlayOpacity': overlayOpacity,
            'spinnerIcon': spinnerIcon,
            'spinnerColor': spinnerColor,
            'spinnerSize': spinnerSize,
            'overlayIDName': overlayIDName,
            'spinnerIDName': spinnerIDName,
        };
        loadingOverlay.generateSpinnerElement();

        document.body.innerHTML = loadingOverlay.generateOverlayElement();

        // Expect spinner element.
        expect(document.getElementsByClassName('la-' + spinnerIcon).length).toEqual(1);
        expect(document.getElementsByClassName('la-' + spinnerSize).length).toEqual(1);
        expect(document.getElementsByClassName('la-' + spinnerSize)[0].style.color).toEqual(spinnerColor);

        // Expect overlay element.
        expect(document.getElementById(overlayIDName)).not.toBeNull();
        expect(document.getElementById(overlayIDName).style.backgroundColor).toEqual(overlayBackgroundColor);
        expect(document.getElementById(overlayIDName).style.opacity).toBe(overlayOpacity);
    })
});

describe('setOptions function', () => {
    test('It should override default options when options parameter exist.', () => {
        let options = {
            'overlayBackgroundColor': '#000',
            'overlayOpacity': 1,
            'spinnerIcon': 'ball-beat',
            'spinnerColor': '#fff',
            'spinnerSize': '2x',
            'overlayIDName': 'overlay-id',
            'spinnerIDName': 'spinner-id'
        };

        loadingOverlay.setOptions(options);

        expect(loadingOverlay.options.overlayBackgroundColor).toEqual(options.overlayBackgroundColor);
        expect(loadingOverlay.options.overlayOpacity).toEqual(options.overlayOpacity);
        expect(loadingOverlay.options.spinnerIcon).toEqual(options.spinnerIcon);
        expect(loadingOverlay.options.spinnerColor).toEqual(options.spinnerColor);
        expect(loadingOverlay.options.spinnerSize).toEqual(options.spinnerSize);
        expect(loadingOverlay.options.overlayIDName).toEqual(options.overlayIDName);
        expect(loadingOverlay.options.spinnerIDName).toEqual(options.spinnerIDName);
    });

    test('It should not override default options when options parameter not exist.', () => {
        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner'
        };

        loadingOverlay.setOptions();

        expect(loadingOverlay.options.overlayBackgroundColor).toEqual(defaultOptions.overlayBackgroundColor);
        expect(loadingOverlay.options.overlayOpacity).toEqual(defaultOptions.overlayOpacity);
        expect(loadingOverlay.options.spinnerIcon).toEqual(defaultOptions.spinnerIcon);
        expect(loadingOverlay.options.spinnerColor).toEqual(defaultOptions.spinnerColor);
        expect(loadingOverlay.options.spinnerSize).toEqual(defaultOptions.spinnerSize);
        expect(loadingOverlay.options.overlayIDName).toEqual(defaultOptions.overlayIDName);
        expect(loadingOverlay.options.spinnerIDName).toEqual(defaultOptions.spinnerIDName);
    });
});

describe('hide function', () => {
    test('It should hide the loading overlay.', () => {
        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner'
        };

        loadingOverlay.show(defaultOptions);

        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeTruthy();
        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);

        loadingOverlay.hide();
        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeNull();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeNull();
        expect(document.getElementsByTagName('link').length).toEqual(0);
    });
});

describe('show function', () => {
    test('It should show the loading overlay.', () => {
        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner'
        };

        loadingOverlay.show(defaultOptions);

        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeTruthy();
        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);
    });
});
