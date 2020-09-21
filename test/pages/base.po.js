'use strict';
require('../glob');

let Basepage = function () {

    
    let base = this;
    // timeout for expected condictions
    this.timeout = 5000;

    
    let ElementFinder = $('').constructor;

    ElementFinder.prototype.waitClickable = function (timeout) {
        browser.wait(base.isClickable(this), timeout || base.timeout);
        return this;
    };

    ElementFinder.prototype.waitReady = function (timeout) {
        browser.wait(base.isVisible(this), timeout || base.timeout);
        return this;
    };

    ElementFinder.prototype.pressEnter = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        return this;
    };




    /**
     * Wrappers for expected conditions
     *
     */
    let EC = protractor.ExpectedConditions;

    this.isVisible = function (locator) {
        return EC.and(EC.presenceOf(locator), EC.visibilityOf(locator));
        // return EC.visibilityOf(locator);
    };

    this.isClickable = function (locator) {
        return EC.elementToBeClickable(locator);
    };




}


module.exports = new Basepage()