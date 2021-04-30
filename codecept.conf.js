const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: 'Android',
      app: './app-release.apk',
      desiredCapabilities: {
        appPackage: "com.qazandoapp",
        appActivity: "MainActivity",
        deviceName: "pixel",
        platformVersion: "11"
      }
      /*
      Appium: {
        platform: 'iOS',
        app: './qazandoapp.app',
        desiredCapabilities: {
          deviceName: "iPhone 11 Pro Max",
          platformVersion: "14.1"
        }
    }*/
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'curso-appium',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
  }
}