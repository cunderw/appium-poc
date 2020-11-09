import AppScreen from './app.screen';
import Gestures from '../helpers/Gestures';

const SELECTORS = {
    HOLEVERIFICATION_SCREEN:
        'android=new UiSelector().resourceId("android:id/content")',
    ADDNEW_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/plus_image")',
    LINE_INPUT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/line_search_edit_text")',
    ITEMNUMBER_INPUT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_search_edit_text")',
    ITEMERROR_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_error")',
    ADD_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/add_button")',
    PULLPARTS_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/continue_button")',
    RESTOCK_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/continue_button")',
    TOPULL_LIST:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/toPullList")',
};

class HoleVerificationScreen extends AppScreen {
    get addNewButton() {
        return $(SELECTORS.ADDNEW_BUTTON);
    }

    get lineInput() {
        return $(SELECTORS.LINE_INPUT);
    }

    get itemNumberInput() {
        return $(SELECTORS.ITEMNUMBER_INPUT);
    }

    get findButton() {
        return $(SELECTORS.ADD_BUTTON);
    }

    get itemErrorMsg() {
        return $(SELECTORS.ITEMERROR_TXT).getText();
    }

    get pullPartsButton() {
        return $(SELECTORS.PULLPARTS_BUTTON);
    }

    get restockButton() {
        return $(SELECTORS.RESTOCK_BUTTON);
    }

    get tooPullList() {
        return $(SELECTORS.TOPULL_LIST);
    }

    constructor() {
        super(SELECTORS.HOLEVERIFICATION_SCREEN);
    }

    addProduct(line, item, find = true, clear = true) {
        while (this.addNewButton.isExisting() === false) {
            Gestures.swipeDown(1);
        }
        this.addNewButton.touchAction('tap');
        if (clear) {
            this.lineInput.setValue('');
            this.itemNumberInput.setValue('');
        }
        if (line) {
            this.lineInput.touchAction('tap');
            this.lineInput.addValue(line);
        }
        if (item) {
            this.itemNumberInput.touchAction('tap');
            this.itemNumberInput.addValue(item);
        }
        if (find) {
            this.findButton.touchAction('tap');
        }
    }
}

export default new HoleVerificationScreen();
