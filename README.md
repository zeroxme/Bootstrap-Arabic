Bootstrap Arabic 2.3.2
================

Flat style + Font Awesome 3.2.1

## Compiling CSS and JavaScript

Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Install the [necessary local dependencies](package.json) via `npm install`

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

#### compile JavaScript - `grunt js`
run concat and minify JavaScript files inside `/assets/js`

#### compile LESS - `grunt css`
compile LESS files and minify CSS files inside `/assets/css`

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.