'use strict'
require('./glob');
const { browser } = require('protractor');
const homepage = require('./pages/home.po')


beforeEach('navigate',  function () {

    browser.manage().window().setSize(1600, 1024);
    browser.manage().window().maximize();
    homepage.goto();
    
});

afterEach(function() {
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');
    browser.driver.manage().deleteAllCookies(); 
  });
