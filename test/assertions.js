'use strict';
require('./glob');

let Assertions = function() {

    let ElementFinder = $('').constructor;

    ElementFinder.prototype.buttonShouldBeDisabled = function () {
        this.getAttribute('class').should.eventually.contains('disabled');
        return this;
    };

    ElementFinder.prototype.buttonShouldBeEnabled = function () {     
        this.getAttribute('class').should.eventually.not.contains('disabled');
        return this;
    };
}

module.exports = new Assertions();