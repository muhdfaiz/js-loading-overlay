## JS Loading Overlay

JS loading overlay using awesome spinner from [Load Awesome](https://github.danielcardoso.net/load-awesome/animations.html). It contains 52 spinner you can choose.

### Build and Coverage Status
[![Coverage Status](https://coveralls.io/repos/github/muhdfaiz/js-loading-overlay/badge.svg?branch=master)](https://coveralls.io/github/muhdfaiz/js-loading-overlay?branch=master) [![Build Status](https://travis-ci.org/muhdfaiz/js-loading-overlay.svg?branch=master)](https://travis-ci.org/taniarascia/chip8)

### How To Install
```markdown
npm install --save js-loading-overlay
```

### Demo


### List Of Available Spinner
- See [Load Awesome Website](https://github.danielcardoso.net/load-awesome/animations.html) 
- For example if you want to use `Ball Atom` spinner. Set `spinnerIcon` in options to `ball-atom`. Name of the icon must 
be lowercase and replace space with dash symbol (-).

### Default Options

```markdown
'overlayBackgroundColor': '#666666',
'overlayOpacity': 0.6,
'spinnerIcon': 'ball-circus',
'spinnerColor': '#000',
'spinnerSize': '3x',
'overlayIDName': 'overlay',
'spinnerIDName': 'spinner',
```

### Options

```markdown
overlayBackgroundColor - overlay background color. Example: #000 or rgb(0, 0, 0)
overlayOpacity - opacity of the overlay. From 0 to 1.
spinnerColor - color of the spinner. Example: #000 or rgb(0, 0, 0)
spinnerSize - Available size: `small`, `default`, `2x`, `3x`
overlayIDName - ID of overlay div.
spinnerIDName - ID of spinner div.
```

### Available Spinner Icon

```markdown
ball-8bits
ball-atom
ball-beat
ball-circus
ball-climbing-dot
ball-clip-rotate
ball-clip-rotate-multiple
ball-clip-rotate-pulse
ball-elastic-dots
ball-fall
ball-fussion
ball-grid-beat
ball-grid-pulse
ball-newton-cradle
ball-pulse
ball-pulse-rise
ball-pulse-sync
ball-rotate
ball-running-dots
ball-scale
ball-scale-multiple
ball-scale-pulse
ball-scale-ripple
ball-scale-ripple-multiple
ball-spin
ball-spin-clockwise
ball-spin-clockwise-fade
ball-spin-clockwise-fade-rotating
ball-spin-fade
ball-spin-fade-rotating
ball-spin-rotate
ball-square-clockwise-spin
ball-square-spin
ball-triangle-path
ball-zig-zag
ball-zig-zag-deflect
cog
cube-transition
fire
line-scale
line-scale-party
line-scale-pulse-out
line-scale-pulse-out-rapid
line-spin-clockwise-fade
line-spin-clockwise-fade-rotating
line-spin-fade
line-spin-fade-rotating
pacman
square-jelly-box
square-loader
square-spin
timer
triangle-skew-spin
```

### Show loading overlay

```markdown
JsLoadingOverlay.show();
```

### Hide Loading Overlay

```markdown
JsLoadingOverlay.hide();
```
