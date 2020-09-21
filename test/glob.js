global.config = require('./config.js');
global.base = require('./pages/base.po');
global.assertions = require('./assertions')
global.chai = require('chai');
chai.use(require('chai-as-promised'));
global.expect = chai.expect;
global.should = chai.should();

