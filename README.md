# makeup-focusables

<p>
    <a href="https://travis-ci.org/makeup-js/makeup-focusables"><img src="https://api.travis-ci.org/makeup-js/makeup-focusables.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-js/makeup-focusables?branch=master'><img src='https://coveralls.io/repos/makeup-js/makeup-focusables/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-js/makeup-focusables"><img src="https://david-dm.org/makeup-js/makeup-focusables.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-js/makeup-focusables#info=devDependencies"><img src="https://david-dm.org/makeup-js/makeup-focusables/dev-status.svg" alt="devDependency status" /></a>
</p>

Returns an array of all focusable descendants of the given element.

A vanilla JavaScript port of <a href="https://github.com/ianmcburnie/jquery-focusable">jquery-focusable</a>.

## Experimental

This CommonJS module is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
// via npm
npm install makeup-focusables

// via yarn
yarn add makeup-focusables
```

## Example

Markup:

```html
<div class="widget">
    <h2 tabindex="-1">Widget Title</h2>
    <p>Widget Text</p>
    <button type="button">Widget Button</button>
    <a href="#">Widget Link</a>
</div>
```

```js
// require the module
const focusables = require('makeup-focusables');

// get element reference
const widgetEl = document.querySelector('.widget');

// get array of all focusable elements (keyboard and programmatic)
const allItems = focusables(widgetEl);

console.log(allItems.length) // outputs: 3

// get array of only keyboard focusable elements
const keyboardItems = focusables(widgetEl, true);

console.log(keyboardItems.length) // outputs: 2
```

## Parameters

* `el`: the element to search (default: undefined)
* `keyboardOnly`: return only elements focusable in sequential keyboard navigation (default: false)

## Custom Events        

* None

## Dependencies

* None

## Polyfills

* None

## CI Build

https://travis-ci.org/makeup-js/makeup-focusables

## Code Coverage

https://coveralls.io/github/makeup-js/makeup-focusables
