import allureReporter from '@wdio/allure-reporter';

class Utilities {
    /**
     * @param {string} str - Message to display on indent folder
     */
    indent(str) {
        allureReporter.startStep(str);
    }

    /**
     * @param {string} str - Add a description to the step in Allure
     */
    description(str) {
        allureReporter.addDescription(str);
    }

    /**
     * @param {string} [status] - Display a status on the step other than "passed" (default). Must be "failed", "passed" or "broken"
     */
    outdent(status) {
        allureReporter.endStep(status);
    }

    /**
     * @param {string} str - Log a message in the test report
     */
    logMessage(str) {
        allureReporter.addStep(str);
    }
}

export default new Utilities();
