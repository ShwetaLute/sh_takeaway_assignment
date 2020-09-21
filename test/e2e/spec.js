require('../hooks')
const path = require('path')
const xlsx = require('../utils/excel.utils')
const filepath = require('../../filepaths')

const homepage = require('../pages/home.po')
const restaurantsList = require('../pages/restaurantpages/restaurants.search.po')
const testSeleRestaurantpage = require('../pages/restaurantpages/test.sele.restaurant.po')
const checkoutpage = require('../pages/checkout.po')
const orderpage = require('../pages/order.po')


describe('validate order scenario', function () {



  it('select a restaurant and order with nearest price', function (done) {


    // read data from excel file
    let customerDataArray = xlsx.getExcelDataInJsonFormat(path.join(filepath.baseDir, 'test','data', 'customer.xlsx'), 'customer_info')
    // take first row from excel file 
    let customerData = customerDataArray[0];
    
    homepage.searchRestaurantsForPostCode(customerData["Search For Post Code"], customerData["Select Post Code"])
    restaurantsList.validateIfRestaurantsPresent();
    restaurantsList.selectRestaurant(customerData["Restaurant Name"])

    // validate if order button is disabled before selecting food item
    testSeleRestaurantpage.orderButton.buttonShouldBeDisabled();

    testSeleRestaurantpage.selectFoodItem(customerData["Food Item"])

       // validate if order button becomes enabled after selecting food item
    testSeleRestaurantpage.orderButton.buttonShouldBeEnabled();

    // validate if order basket contains selected food item
    testSeleRestaurantpage.validateOrderBasket(customerData["Restaurant Name"],customerData["Food Item"])
    testSeleRestaurantpage.orderButton.click();

    checkoutpage.filloutCustomerDetails(customerData["Street Name and House Number"], customerData["Postal Code"], customerData["Place Name"], customerData["Customer Name"], customerData["Email"], customerData["Phone Number"])

    // select next highest price of order price
    checkoutpage.selectNearestPrice();
    checkoutpage.checkoutOrder.click();

    // read order number
    orderpage.getOrderReferenceNumber();
    done()
  })

  it('select a restaurant and order', function (done) {

    // read data from excel file
    let customerDataArray = xlsx.getExcelDataInJsonFormat(path.join(filepath.baseDir, 'test','data', 'customer.xlsx'), 'customer_info')
    // take first row from excel file 
    let customerData = customerDataArray[0];
    
    homepage.searchRestaurantsForPostCode(customerData["Search For Post Code"], customerData["Select Post Code"])

    restaurantsList.selectRestaurant(customerData["Restaurant Name"])

    // validate if order button is disabled before selecting food item
    testSeleRestaurantpage.orderButton.buttonShouldBeDisabled();

    testSeleRestaurantpage.selectFoodItem(customerData["Food Item"])

       // validate if order button becomes enabled after selecting food item
    testSeleRestaurantpage.orderButton.buttonShouldBeEnabled();
 

    // validate if order basket contains selected food item
    testSeleRestaurantpage.validateOrderBasket(customerData["Restaurant Name"],customerData["Food Item"])
    testSeleRestaurantpage.orderButton.click();

    checkoutpage.filloutCustomerDetails(customerData["Street Name and House Number"], customerData["Postal Code"], customerData["Place Name"], customerData["Customer Name"], customerData["Email"], customerData["Phone Number"])

    // select next highest price of order price
    checkoutpage.checkoutOrder.click();

    // read order number
    orderpage.getOrderReferenceNumber();
    done()
  })


})