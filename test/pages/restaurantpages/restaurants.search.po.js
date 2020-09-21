'use strict';

const { browser } = require('protractor');

require('../../glob');

let Restaurantslistpage = function () {

    this.selectRestaurant = function (restaurantName) {
        element(by.xpath(`//a[contains(text(),"${restaurantName}")]`)).click();
    }

    this.validateIfRestaurantsPresent =async function() {

        browser.sleep(2000)
        let restaurantsCount =  await $$('div[class="js-restaurant-list-open"]>div').count();
        expect(restaurantsCount).to.be.greaterThan(100);
        
    }
}

module.exports = new Restaurantslistpage();