## JS Loading Overlay
[![Build Status](https://img.shields.io/github/workflow/status/muhdfaiz/js-loading-overlay/JS%20Loading%20overlay)](https://github.com/muhdfaiz/js-loading-overlay/actions?query=branch%3Amaster)
[![Coverage Status](https://coveralls.io/repos/github/muhdfaiz/js-loading-overlay/badge.svg?branch=master)](https://coveralls.io/github/muhdfaiz/js-loading-overlay?branch=master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/muhdfaiz/js-loading-overlay/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/muhdfaiz/js-loading-overlay/?branch=master) 
![Downloads](https://img.shields.io/npm/dt/js-loading-overlay)
[![Version](https://img.shields.io/npm/v/js-loading-overlay)](https://www.npmjs.com/package/js-loading-overlay)
![Size](https://img.shields.io/bundlephobia/min/js-loading-overlay)

Display loading overlay easily and beautifully in your application. JS loading overlay using awesome spinner from [Load Awesome](https://github.danielcardoso.net/load-awesome/animations.html). It contains 52 spinner you can choose.

## Features

- **Full page loading overlay.** Able to show full page loading overlay. 

- **Loading overlay inside container.** Able to display the loading overlay inside the container

- **Lock scroll.** Able to lock the scroll during loading overlay active.

## Documentation

For detail of installation instructions, in-depth usage, please take a look at the [documentation](https://js-loading-overlay.muhdfaiz.com/).

### How To Install
```markdown
NPM
npm install --save js-loading-overlay

Yarn
yarn add js-loading-overlay

Use without NPM or Yarn
import 'js-loading-overlay'
JsLoadingOverlay.show({'spinnerIcon': 'triangle-skew-spin'});
```

### How To Use
```markdown
import 'js-loading-overlay'
JsLoadingOverlay.show({'spinnerIcon': 'triangle-skew-spin'});

or

<script src="js-loading-overlay.min.js"></script>
JsLoadingOverlay.show({'spinnerIcon': 'triangle-skew-spin'});
```

### Show loading overlay with default options

```markdown
JsLoadingOverlay.show();
```

### Show loading overlay with custom options

```markdown
JsLoadingOverlay.show({
  'overlayBackgroundColor': '#666666',
  'overlayOpacity': 0.6,
  'spinnerIcon': 'ball-atom',
  'spinnerColor': '#000',
  'spinnerSize': '2x',
  'overlayIDName': 'overlay',
  'spinnerIDName': 'spinner',
  'spinnerZIndex':99999,
  'overlayZIndex':99998
});
```

### Hide Loading Overlay

```markdown
JsLoadingOverlay.hide();
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.