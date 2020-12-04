const loadingOverlay = require('../src/js-loading-overlay');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

beforeEach(() => {
    document.body.innerHTML = '';
    document.head.innerHTML = '';
    loadingOverlay.options = {
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
        'overlayZIndex': 99998,
        'spinnerZIndex': 99999,
    };
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
    test('It should generate correct overlay element in full page', () => {
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

        loadingOverlay.show();

        // Expect spinner element.
        expect(document.getElementsByClassName('la-' + spinnerSize).length).toEqual(1);
        expect(document.getElementsByClassName('la-' + spinnerSize)[0].style.color).toEqual(spinnerColor);

        // Expect overlay element.
        expect(document.getElementById(overlayIDName)).not.toBeNull();
        expect(document.getElementById(overlayIDName).style.backgroundColor).toEqual(overlayBackgroundColor);
        expect(document.getElementById(overlayIDName).style.opacity).toBe(overlayOpacity);
    })

    test('It should generate correct overlay element in container', () => {
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
            'containerID': 'table'
        };

        document.body.innerHTML = '<div id="table"><table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Test Company</td><td>Muhammad Faiz</td><td>Malaysia</td></tr></table></div>'
        loadingOverlay.show();

        // Expect overlay and spinner element inside the container.
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.overlayIDName))).toBe(true);
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.spinnerIDName))).toBe(true);

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
            'spinnerIDName': 'spinner-id',
            'offsetX': 10,
            'offsetY': 20,
            'lockScroll': true,
            'containerID': 'table',
            'overlayZIndex': 99998,
            'spinnerZIndex': 99999,
        };

        loadingOverlay.setOptions(options);

        expect(loadingOverlay.options.overlayBackgroundColor).toEqual(options.overlayBackgroundColor);
        expect(loadingOverlay.options.overlayOpacity).toEqual(options.overlayOpacity);
        expect(loadingOverlay.options.spinnerIcon).toEqual(options.spinnerIcon);
        expect(loadingOverlay.options.spinnerColor).toEqual(options.spinnerColor);
        expect(loadingOverlay.options.spinnerSize).toEqual(options.spinnerSize);
        expect(loadingOverlay.options.overlayIDName).toEqual(options.overlayIDName);
        expect(loadingOverlay.options.spinnerIDName).toEqual(options.spinnerIDName);
        expect(loadingOverlay.options.offsetX).toEqual(options.offsetX);
        expect(loadingOverlay.options.offsetY).toEqual(options.offsetY);
        expect(loadingOverlay.options.lockScroll).toEqual(options.lockScroll);
        expect(loadingOverlay.options.containerID).toEqual(options.containerID);
        expect(loadingOverlay.options.spinnerZIndex).toEqual(options.spinnerZIndex);
        expect(loadingOverlay.options.overlayZIndex).toEqual(options.overlayZIndex);
    });

    test('It should not override default options when options parameter not exist.', () => {
        loadingOverlay.setOptions();

        expect(loadingOverlay.options.overlayBackgroundColor).toEqual('#666666');
        expect(loadingOverlay.options.overlayOpacity).toEqual(0.6);
        expect(loadingOverlay.options.spinnerIcon).toEqual('ball-circus');
        expect(loadingOverlay.options.spinnerColor).toEqual('#000');
        expect(loadingOverlay.options.spinnerSize).toEqual('3x');
        expect(loadingOverlay.options.overlayIDName).toEqual('overlay');
        expect(loadingOverlay.options.spinnerIDName).toEqual('spinner');
        expect(loadingOverlay.options.offsetX).toEqual(0);
        expect(loadingOverlay.options.offsetY).toEqual(0);
        expect(loadingOverlay.options.lockScroll).toEqual(false);
        expect(loadingOverlay.options.containerID).toEqual(null);
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

    test('It should not return an error when the loading overlay not shown.', () => {
        loadingOverlay.hide();
    });

    test('It should unlock back the scroll after hide.', () => {
        document.body.style.position = 'relative';
        document.body.style.width = '500px';
        document.body.style.top = '100px';

        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner',
            'lockScroll': true,
        };

        loadingOverlay.show(defaultOptions);
        expect(document.body.style.overflow).toEqual('hidden');
        expect(document.documentElement.style.overflow).toEqual('hidden');

        loadingOverlay.hide();
        expect(document.body.style.overflow).toEqual('');
        expect(document.documentElement.style.overflow).toEqual('');
    });
});

describe('show function', () => {
    test('It should show the loading overlay in full page.', () => {
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

        expect(document.querySelectorAll('body > #' + defaultOptions.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeTruthy();
        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);
    });

    test('It should show the loading overlay in container page.', () => {
        document.body.innerHTML = '<div id="table"><table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Test Company</td><td>Muhammad Faiz</td><td>Malaysia</td></tr></table></div>'

        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner',
            'containerID': 'table'
        };

        loadingOverlay.show(defaultOptions);

        expect(document.querySelectorAll('body > #' + defaultOptions.overlayIDName).length === 0).toBe(true);

        // Expect overlay and spinner element inside the container.
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.overlayIDName))).toBe(true);
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.spinnerIDName))).toBe(true);

        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeTruthy();
        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);
    });

    test('It should show the loading overlay in container page.', () => {
        document.body.innerHTML = '<div id="table"><table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Test Company</td><td>Muhammad Faiz</td><td>Malaysia</td></tr></table></div>'

        let defaultOptions = {
            'overlayBackgroundColor': '#666666',
            'overlayOpacity': 0.6,
            'spinnerIcon': 'ball-circus',
            'spinnerColor': '#000',
            'spinnerSize': '3x',
            'overlayIDName': 'overlay',
            'spinnerIDName': 'spinner',
            'containerID': 'table'
        };

        loadingOverlay.show(defaultOptions);

        expect(document.querySelectorAll('body > #' + defaultOptions.overlayIDName).length === 0).toBe(true);

        // Expect overlay and spinner element inside the container.
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.overlayIDName))).toBe(true);
        expect(document.getElementById(loadingOverlay.options.containerID).contains(document.getElementById(loadingOverlay.options.spinnerIDName))).toBe(true);

        expect(document.getElementById(loadingOverlay.options.overlayIDName)).toBeTruthy();
        expect(document.getElementById(loadingOverlay.options.spinnerIDName)).toBeTruthy();
        expect(document.getElementsByTagName('link')[0].getAttribute('href')).toBe(loadingOverlay.spinnerStylesheetURL);
    });

    test('It should show the loading overlay with custom offset of spinner position.', () => {
        document.body.innerHTML = ''

        let defaultOptions = {
            'offsetY': '-10px',
            'offsetX': '20px',
        };

        loadingOverlay.show(defaultOptions);

        expect(document.querySelectorAll('body > #' + defaultOptions.overlayIDName).length === 0).toBe(true);
        expect(document.body.innerHTML).toContain('calc(50% + ' + defaultOptions.offsetY);
        expect(document.body.innerHTML).toContain('calc(50% + ' + defaultOptions.offsetX);
    });

    test('It should show the loading overlay with custom z-index.', () => {
        document.body.innerHTML = ''

        let defaultOptions = {
            'spinnerZIndex': 50,
            'overlayZIndex': 49
        };

        loadingOverlay.show(defaultOptions);

        expect(document.querySelectorAll('body > #' + defaultOptions.overlayIDName).length === 0).toBe(true);

        expect(document.getElementById(loadingOverlay.options.overlayIDName).style.zIndex).toBe(defaultOptions.overlayZIndex.toString());
        expect(document.getElementById(loadingOverlay.options.spinnerIDName).style.zIndex).toBe(defaultOptions.spinnerZIndex.toString());
    });
});
