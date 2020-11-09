import { DEFAULT_TIMEOUT } from '../constants';
import Utilities from '../Utilities/Utilities';

const SELECTORS = {
    BACK_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/button_back")',
    SCREEN_TITLE:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/toolbar_title")',
};

export default class AppScreen {
    get backButton() {
        return $(SELECTORS.BACK_BUTTON);
    }

    get screenTitle() {
        return $(SELECTORS.SCREEN_TITLE);
    }

    constructor(selector) {
        this.selector = selector;
    }

    navigateBack() {
        Utilities.indent('Navigating Back');
        this.backButton.click();
        Utilities.outdent();
    }

    getScreenTitle() {
        // this.screenTitle.waitForDisplayed();
        return this.screenTitle.getText();
    }

    /**
     * Wait for the screen to be visible
     *
     * @param {boolean} isShown
     * @return {boolean}
     */
    waitForIsShown(isShown = true) {
        Utilities.indent('Waiting For Screen To Display');
        const result = $(this.selector).waitForDisplayed(
            DEFAULT_TIMEOUT,
            !isShown
        );
        Utilities.outdent();
        return result;
    }
}
