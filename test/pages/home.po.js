'use strict'
require('../glob');
const { browser } = require('protractor');
const base = require('./base.po');

let Homepage = function () {


    this.cookieElement = $("div[data-button-text='OK'] button")
    this.searchZipCode = $('input[id="imysearchstring"]')

    this.goto = async function () {
     
        browser.waitForAngularEnabled(false)
        browser.get(config.webserver); 
        this.cookieElement.click()       
    }

    this.searchRestaurantsForPostCode = function (searchWithZipCode, selectZipCode) {

        this.searchZipCode.click()
        this.searchZipCode.sendKeys(searchWithZipCode)
        this.searchZipCode.pressEnter();
        element(by.xpath(`//a[contains(@data-href,"${selectZipCode}")]`)).waitReady().click();
    }
}

Homepage.prototype = base;
module.exports = new Homepage();