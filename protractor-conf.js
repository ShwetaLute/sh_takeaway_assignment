exports.config = {
  framework: 'mocha',
  specs: ['test/e2e/spec.js'],
  directConnect: true,
  capabilities: {
    'browserName': 'chrome',
    shardTestFiles: false,
    maxInstances: 1
  },
  mochaOpts: {
    force: true,
    colors: true,
    reporter: 'mochawesome-screenshots',
    reporterOptions: {
      reportDir: 'test/report',
      reportName: 'TakeAway Execution Report',
      reportTitle: 'e2e test report',
      takePassedScreenshot: false,
      clearOldScreenshots: true
    },
    timeout: 600000
  },
  onPrepare: function () {
    browser.driver.manage().window().setSize(1600, 1024);
    browser.manage().timeouts().implicitlyWait(5000)
  }

}