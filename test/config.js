'use strict';
require('./glob.js');

let config = function () {

    switch (process.env.TEST_ENV) {
  
        case 'qa':
            this.env = 'qa';
            this.webserver = 'https://www.takeaway.com';
            break;
        case 'trunk':
            this.env = 'dev';
            this.webserver = 'https://www.takeaway.com';
            break;      
        default:
            this.env = 'qa';
            this.webserver = 'https://www.takeaway.com';      
            process.env.BROWSER = 'chrome';
    }

    console.log('Test env: ' + this.env);
    console.log('Web server: ' + this.webserver);

};

module.exports = new config();

