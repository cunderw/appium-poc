import AppScreen from './app.screen';

const SELECTORS = {
    PRODUCTDETAILS_SCREEN:
        'android=new UiSelector().resourceId("android:id/content")',
    LINE_INPUT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/line_search_edit_text")',
    ITEMNUMBER_INPUT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_search_edit_text")',
    ITEMERROR_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/item_error")',
    FIND_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/find_button")',
    ITEM_IMG:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/imageView")',
    PRODUCTDESCRIPTION_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/productDescription")',
    LINEITEM_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/lineItem")',
    LISTPRICE_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/listPrice")',
    ACTUALPRICE_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/actualPrice")',
    ONHAND_TXT:
        '//android.view.ViewGroup[@content-desc="On Hand"]/android.widget.TextView[2]',
    ONORDER_TXT:
        '//android.view.ViewGroup[@content-desc="On Order"]/android.widget.TextView[2]',
    MAX_TXT:
        '//android.view.ViewGroup[@content-desc="Max"]/android.widget.TextView[2]',
    MIN_TXT:
        '//android.view.ViewGroup[@content-desc="Min"]/android.widget.TextView[2]',
    SEEMORE_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/seeMoreDetailButton")',
    WARRANTY_TXT:
        '//android.view.ViewGroup[@content-desc="Warranty"]/android.widget.TextView[2]',
    COUNT_TXT:
        '//android.view.ViewGroup[@content-desc="Count"]/android.widget.TextView[2]',
    BACKORDER_TXT:
        '//android.view.ViewGroup[@content-desc="Backorder"]/android.widget.TextView[2]',
    WSQ_TXT:
        '//android.view.ViewGroup[@content-desc="WSQ"]/android.widget.TextView[2]',
    UM_TXT:
        '//android.view.ViewGroup[@content-desc="Unit of Measure"]/android.widget.TextView[2]',
    PGNAME_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/planogramName)',
    PGNUMBER_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/numberValue")',
    SIZE_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/sizeValue")',
    POS_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/positionValue")',
    MINSHELF_TXT:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/qtyValue")',
};

class ProductDetailsScreen extends AppScreen {
    get lineInput() {
        return $(SELECTORS.LINE_INPUT);
    }

    get itemNumberInput() {
        return $(SELECTORS.ITEMNUMBER_INPUT);
    }

    get findButton() {
        return $(SELECTORS.FIND_BUTTON);
    }

    get itemErrorMsg() {
        return $(SELECTORS.ITEMERROR_TXT);
    }

    get itemImage() {
        return $(SELECTORS.ITEM_IMG);
    }

    get productDescriptionValue() {
        return $(SELECTORS.PRODUCTDESCRIPTION_TXT);
    }

    get lineItemValue() {
        return $(SELECTORS.LINEITEM_TXT);
    }

    get listPriceValue() {
        return $(SELECTORS.LISTPRICE_TXT);
    }

    get actualPriceValue() {
        return $(SELECTORS.ACTUALPRICE_TXT);
    }

    get onHandValue() {
        return $(SELECTORS.ONHAND_TXT);
    }

    get onOrderValue() {
        return $(SELECTORS.ONORDER_TXT);
    }

    get ofmValue() {
        return $(SELECTORS.OFM_TXT);
    }

    get warrantyValue() {
        return $(SELECTORS.WARRANTY_TXT);
    }

    get seeMoreButton() {
        return $(SELECTORS.SEEMORE_BUTTON);
    }

    get maxValue() {
        return $(SELECTORS.MAX_TXT);
    }

    get minValue() {
        return $(SELECTORS.MIN_TXT);
    }

    get countValue() {
        return $(SELECTORS.COUNT_TXT);
    }

    get backOrderValue() {
        return $(SELECTORS.BACKORDER_TXT);
    }

    get wsqValue() {
        return $(SELECTORS.WSQ_TXT);
    }

    get umValue() {
        return $(SELECTORS.UM_TXT);
    }

    get pgNameValue() {
        return $(SELECTORS.PGNAME_TXT);
    }

    get pgNumberValue() {
        return $(SELECTORS.PGNUMBER_TXT);
    }

    get sizeValue() {
        return $(SELECTORS.SIZE_TXT);
    }

    get positionValue() {
        return $(SELECTORS.POS_TXT);
    }

    get minShelQtyValue() {
        return $(SELECTORS.MINSHELF_TXT);
    }

    constructor() {
        super(SELECTORS.PRODUCTDETAILS_SCREEN);
    }

    waitForProductDetails() {
        this.itemImage.waitForDisplayed(10000);
    }

    addProduct(line, item, find = true, clear = true) {
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

export default new ProductDetailsScreen();
