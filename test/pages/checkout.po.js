'use strict'
require('../glob');
const base = require('./base.po');


let Checkoutpage = function () {
    
    this.address = $('input[id="iaddress"]');
    this.postalcode = $('input[id="ipostcode"]');
    this.placename = $('input[id="itown"]');
    this.customername = $('input[id="isurname"]');
    this.email = $('input[id="iemail"]');
    this.phonenumber = $('input[id="iphonenumber"]');
    this.priceDropdown = '#ipayswith';
    this.checkoutOrder = $('input[class="button_form cartbutton-button"]')

    this.filloutCustomerDetails = function (streetNameAndHouseNumber,postalCode,placeName,customerName,email,phoneNumber) {

        this.address.sendKeys(streetNameAndHouseNumber)
        this.postalcode.clear();
        this.postalcode.sendKeys(postalCode)        
        this.placename.sendKeys(placeName)
        this.customername.sendKeys(customerName)
        this.email.sendKeys(email)
        this.phonenumber.sendKeys(phoneNumber)
    }


    this.selectNearestPrice = async function () {        
        $(this.priceDropdown).$$('option:nth-child(2)').click(); 
    }
}

Checkoutpage.prototype = base;
module.exports = new Checkoutpage();

