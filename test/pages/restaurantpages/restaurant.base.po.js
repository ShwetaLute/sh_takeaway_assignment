'use strict';
require('../../glob');
const base = require('../base.po');

const path = require('path')
const xlsx = require('../../utils/excel.utils')
const filepath = require('../../../filepaths')




let Restaurantbasepage = function () {

    this.orderButton = element(by.xpath('//button[contains(@class,"basket__order-button cartbutton-button")]'));
    this.orderBasket = $('div#ibasket')

    this.selectFoodItem = function (foodItem) {

        $(`div[anchor-id="categorie_Meal_deals"] div[role="button"] span[data-product-name="${foodItem}"]`).click()
    }

    this.validateOrderBasket = async function (restaurantName, foodItem) {

        const restaurantId = getRestaurantId(restaurantName)
        let getOrderBasketItemName = `//div[@id="products"]//div[@data-restaurant="${restaurantId}"]/span[2]`
        let itemNameFromBasket = await element(by.xpath(getOrderBasketItemName)).getText();
        expect(itemNameFromBasket).to.equal(foodItem);
    
    }

    function getRestaurantId(restaurantName) {

        let restaurantMappingArray = xlsx.getExcelDataInJsonFormat(path.join(filepath.baseDir, 'test','data', 'restaurant_id_mapping.xlsx'), 'mapping')
        let restaurantId;

        for (let obj of restaurantMappingArray) {           
            if (obj["RestaurantName"] == restaurantName) {
                restaurantId = obj["RestaurantId"];
                break;
            }
          }

          return restaurantId;
    }
}

Restaurantbasepage.prototype = base;
module.exports = new Restaurantbasepage();