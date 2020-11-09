exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 90000,
    },
    sync: true,
    logLevel: 'error',
    deprecationWarnings: true,
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: [
        'spec',
        [
            'junit',
            {
                outputDir: './',
                outputFileFormat: function (options) {
                    // optional
                    return `results-${options.cid}.${options.capabilities.platformName}.xml`;
                },
                errorOptions: {
                    error: 'message',
                    failure: 'message',
                    stacktrace: 'stack',
                },
            },
        ],
        [
            'allure',
            {
                outputDir: './logs/reports/allure-results/',
                disableWebdriverStepsReporting: false,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================
    beforeSession: (config, capabilities, specs) => {
        require('@babel/register');
        console.log(process.env.value);
    },
    afterCommand: function (commandName, args, result, error) {
        // browser.takeScreenshot();
    },
};
