import AppScreen from '../app.screen';

const SELECTORS = {
    POPUP:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/brand_choice_list")',
    ITEM_NUMBER:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_number")',
    CHOICE_LIST:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/brand_choice_list")',
    CANCEL_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/cancel_button")',
    SELECT_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/add_button")',
};

class BrandPopup extends AppScreen {
    get popUp() {
        return $(SELECTORS.POPUP);
    }

    get itemNumber() {
        return $(SELECTORS.ITEM_NUMBER);
    }

    get cancelButton() {
        return $(SELECTORS.CANCEL_BUTTON);
    }

    get selectButton() {
        return $(SELECTORS.SELECT_BUTTON);
    }

    get choiceList() {
        return $(SELECTORS.CHOICE_LIST);
    }

    constructor() {
        super(SELECTORS.POPUP);
    }

    waitForPopup() {
        this.popUp.waitForDisplayed(10000);
    }

    selectBrand(brand, select = true) {
        if (brand) {
            const brandChoice = this.choiceList.$(
                'android=new UiSelector().textContains("' + brand + '")'
            );
            brandChoice.touchAction('tap');
        }
        if (select) {
            this.selectButton.touchAction('tap');
        }
    }
}

export default new BrandPopup();
