$_mod.def("/makeup-focusables$0.0.1/index", function(require, exports, module, __filename, __dirname) { 'use strict';

var focusableElList = ['a[href]', 'area[href]', 'button:not([disabled])', 'embed', 'iframe', 'input:not([disabled])', 'object', 'select:not([disabled])', 'textarea:not([disabled])', '*[tabindex]', '*[contenteditable]'];

var focusableElSelector = focusableElList.join();

module.exports = function (el) {
    var sequentialOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var focusableEls = Array.prototype.slice.call(el.querySelectorAll(focusableElSelector));

    if (sequentialOnly === true) {
        focusableEls = focusableEls.filter(function (focusableEl) {
            return focusableEl.getAttribute('tabindex') !== '-1';
        });
    }

    return focusableEls;
};

});