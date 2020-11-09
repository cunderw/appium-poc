# O'Reilly Toolbox Automation

## Installing Appium on a local machine
See [Installing Appium on a local machine](./docs/APPIUM.md)

## Setting up Android and iOS on a local machine
To setup your local machine to use an Android emulator and an iOS simulator see [Setting up Android and iOS on a local machine](./docs/ANDROID_IOS_SETUP.md)

## Quick start
Choose one of the following options:

1. Clone this repository
2. run npm install inside of the repo root
3. npm run android.app will run all specs

## Config
This uses a specific config for iOS and Android, see [configs](./config/) and are based on `wdio.shared.conf.js`.
This shared config holds all the defaults so the iOS and Android configs only need to hold the capabilities and specs that are needed for running on iOS and or Android (app or browser).

Since we do not have Appium installed as part of this package, this has been configured to use the global Appium installation. This is configured in wdio.shared.conf.js
```
appium: {
    command : 'appium'
},
```

## Locator strategy for native apps
The locator strategy for this project is to use `accessibilityID`'s, see also the [WebdriverIO docs](http://webdriver.io/guide/usage/selectors.html#Accessibility-ID) or this newsletter on [AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used and for example only XPATH is only available then the following setup could be used to make cross-platform selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

## Automating Chrome or Safari
Mobile web automation is almost the same as writing tests for desktop browsers. The only difference can be found in the configuration that needs to be used.
Click [here](./config/wdio.ios.browser.conf.js) to find the config for iOS Safari and [here](./config/wdio.android.browser.conf.js) for Android Chrome.
For Android be sure that the lastest version of Chrome is installed, see also [here](./docs/FAQ.md#i-get-the-error-no-chromedriver-found-that-can-automate-chrome-).

For this boilerplate the testcases from the [jasmine-boilerplte](https://github.com/webdriverio/jasmine-boilerplate), created by [Christian Bromann](https://github.com/christian-bromann), are used.

## Cloud vendors

### Sauce Labs Real Device Cloud
There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:
    
    // For Android
    $ npm run android.sauce.rdc.app

## FAQ
See [FAQ](./docs/FAQ.md)

## Tips and Tricks
See [Tips and Tricks](./docs/TIPS_TRICKS.md)
