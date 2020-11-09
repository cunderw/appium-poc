import AppScreen from '../app.screen';

const SELECTORS = {
    ITEMWRAPPER:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/list_item_build").instance({index})',
    LINEITEM_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_line_number")',
    ITEM_DESCRIPTION_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_description")',
    ITEM_PLANODESCRIPTION_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_planogram_description")',
    ITEM_CURRENTPRICE_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_current_price")',
    ITEM_QOH_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_quantity_on_hand")',
    ITEM_QTYNEEDED_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_quantity_needed")',
};

export default class HoleVerificationItemInfo extends AppScreen {
    get itemInfo() {
        return $(SELECTORS.ITEMWRAPPER.replace('{index}', this.index));
    }

    get lineItemValue() {
        return this.itemInfo.$(SELECTORS.LINEITEM_TXT).getText();
    }

    get itemDescripctionValue() {
        return this.itemInfo.$(SELECTORS.ITEM_DESCRIPTION_TXT).getText();
    }

    get itemPlanoDescriptionValue() {
        return this.itemInfo.$(SELECTORS.ITEM_PLANODESCRIPTION_TXT).getText();
    }

    get itemCurrentPriceValue() {
        return this.itemInfo.$(SELECTORS.ITEM_CURRENTPRICE_TXT).getText();
    }

    get itemQOHValue() {
        return this.itemInfo.$(SELECTORS.ITEM_QOH_TXT).getText();
    }

    get itemQtyNeededValue() {
        return this.itemInfo.$(SELECTORS.ITEM_QTYNEEDED_TXT).getText();
    }

    constructor(index) {
        super(SELECTORS.ITEMWRAPPER.replace('{index}', index));
        this.index = index;
        this.waitForIsShown();
    }
}
