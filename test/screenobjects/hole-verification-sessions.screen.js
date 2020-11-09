import AppScreen from './app.screen';
import Gestures from '../helpers/Gestures';

const SELECTORS = {
    HOLEVERIFICATION_SCREEN:
        'android=new UiSelector().resourceId("android:id/content")',
    ADDNEW_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/continue_button")',
    TM_INPUT_FIELD:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/number_input_box")',
    GETSTARTED_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/action_button")',
};

class HoleVerificationSessionsScreen extends AppScreen {
    get addNewButton() {
        return $(SELECTORS.ADDNEW_BUTTON);
    }

    get tmInputField() {
        return $(SELECTORS.TM_INPUT_FIELD);
    }

    get getStartedButton() {
        return $(SELECTORS.GETSTARTED_BUTTON);
    }

    constructor() {
        super(SELECTORS.HOLEVERIFICATION_SCREEN);
    }

    addSession(tmNumber) {
        while (this.addNewButton.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        this.addNewButton.touchAction('tap');
        this.tmInputField.setValue(tmNumber);
        this.getStartedButton.touchAction('tap');
    }
}

export default new HoleVerificationSessionsScreen();
