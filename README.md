Shweta Takeaway assignment 
# Features
- :nut_and_bolt: UI automation tool used in this project is [Protractor](https://www.protractortest.org/).
- :page_with_curl:[Mocha](https://mochajs.org/) testing framework is used.
- :bar_chart: Reports are generated in [Mochawesome](https://www.npmjs.com/package/mochawesome).
- :page_with_curl: Page object model framework is used.

# Getting Statrted
This project performs testing of Takeaway application. It covers a scenario where user can order food from restaurants in their area.

## Prerequisites
Install node - https://nodejs.org/en/download/

## Installation
- Clone this repo to a local directory
```git clone https://github.com/ShwetaLute/sh_takeaway_assignment.git```

- cd into the cloned repo
```cd sh_takeaway_assignment```

- Install node modules
```npm install```

## Running Tests
run  ```npm run start```

# Reports
Reports generated can be found at cd into cloned repo/test/report

# Notes

1. Environment on which test needs to be run can be changed from config.js
2. Order reference number will be printed to console after test is run
3. Restaurant name and restaurant id mapping is used (mapping data can be found at test/data)
4. There are 2 tests in spec.js ( test/e22e) , one where we are selecting nearest of the order price and other one where we are placing the order at order price.
