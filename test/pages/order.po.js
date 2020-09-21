'use strict'
require('../glob');

const base = require('./base.po');

let Orderpage = function() {

    this.orderReferenceNumber = $('span.order-purchaseid')

    this.getOrderReferenceNumber = async function () {

        let orderRefNumber = await this.orderReferenceNumber.getText();
        console.log('orderRefNumber - > ' + orderRefNumber)
    }

}

Orderpage.prototype = base;
module.exports = new Orderpage();