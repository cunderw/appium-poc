import TestData from '../Utilities/test.data';
import HomeScreen from '../screenobjects/home.screen';
import ProductDetailsScreen from '../screenobjects/product-details.screen';
import { TEST_PRODUCT } from '../constants';
import Gestures from '../helpers/Gestures';
import Utilities from '../Utilities/Utilities';
const line = TEST_PRODUCT.line;
const item = TEST_PRODUCT.item;
const custNum = '1';

describe('Product Details Screen', () => {
    const data = TestData.getItemInfo(line, item, custNum);
    it('001. Navigation', () => {
        Utilities.indent('Verify Page is Displayed');
        HomeScreen.waitForIsShown();
        HomeScreen.navigateToProductDetails();
        Utilities.outdent();
    });

    it('002. Verify Screen Displays', () => {
        Utilities.indent('Verify Screen Displays');
        ProductDetailsScreen.addProduct(line, item, true);
        ProductDetailsScreen.waitForProductDetails();
        Utilities.outdent();
        Utilities.indent('Verify Line Item equals: ' + line + '' + item);
        expect(ProductDetailsScreen.lineItemValue.getText()).toEqual(
            line + ' ' + item
        );
        Utilities.outdent();
    });

    it('003. Verify Description ', () => {
        Utilities.indent(
            'Verify Description equals: ' + data.rcatSearch.shortDescription
        );
        expect(ProductDetailsScreen.productDescriptionValue.getText()).toEqual(
            data.rcatSearch.shortDescription.toUpperCase()
        );
        Utilities.outdent();
    });

    it('004. Verify Line and Item ', () => {
        Utilities.indent('Verify line item equals: ');
        expect(ProductDetailsScreen.lineItemValue.getText()).toEqual(
            data.displayItems.imLine + ' ' + data.displayItems.imItem
        );
        Utilities.outdent();
    });

    it('005. Verify Actual Price', () => {
        Utilities.indent(
            'Verify Actual Price equals: ' + data.displayItems.imJobP.toString()
        );
        expect(ProductDetailsScreen.actualPriceValue.getText()).toEqual(
            '$' + data.displayItems.imUser.toString()
        );
        Utilities.outdent();
    });

    it('006. Verify On Hand ', () => {
        Utilities.indent('Verify On Hand equals: ' + data.displayItems.imQOH);
        expect(ProductDetailsScreen.onHandValue.getText()).toEqual(
            data.displayItems.imQOH.toString()
        );
        Utilities.outdent();
    });

    it('007. Verify On Order ', () => {
        Utilities.indent('Verify On Order equals: ' + data.displayItems.imQOO);
        expect(ProductDetailsScreen.onOrderValue.getText()).toEqual(
            data.displayItems.imQOO.toString()
        );
        Utilities.outdent();
    });

    it('008. Verify Max ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.maxValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.outdent();
        Utilities.indent('Verify Max equals: ' + data.displayItems.imMax);
        expect(ProductDetailsScreen.maxValue.getText()).toEqual(
            data.displayItems.imMax.toString()
        );
        Utilities.outdent();
    });

    it('009. Verify Min ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.minValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.outdent();
        Utilities.indent('Verify Min equals: ' + data.displayItems.imMin);
        expect(ProductDetailsScreen.minValue.getText()).toEqual(
            data.displayItems.imMin.toString()
        );
        Utilities.outdent();
    });

    it('010. Verify See More Button', () => {
        Utilities.indent('Verify Section Expands');
        ProductDetailsScreen.seeMoreButton.click();
        Utilities.outdent();
    });

    it('011. Verify OFM? ', () => {
        Utilities.indent('Verify OFM equals: ' + data.displayItems.imOFM);
        // TODO - Redo verifying based on data and badge existance.
        Utilities.outdent();
    });

    it('012. Verify Warranty ', () => {
        Utilities.indent(
            'Verify Warranty equals: ' + data.displayItems.warrDesc
        );
        expect(ProductDetailsScreen.warrantyValue.getText()).toEqual(
            data.displayItems.warrDesc
        );
        Utilities.outdent();
    });

    it('013. Verify Count ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.countValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.outdent();
        Utilities.indent('Verify Count equals: ' + data.displayItems.imAlCt);
        expect(ProductDetailsScreen.countValue.getText()).toEqual(
            data.displayItems.imAlCt.toString()
        );
        Utilities.outdent();
    });

    it('014. Verify Backorder ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.backOrderValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.outdent();
        Utilities.indent('Verify Backorder equals: ' + data.displayItems.imQBO);
        expect(ProductDetailsScreen.backOrderValue.getText()).toEqual(
            data.displayItems.imQBO.toString()
        );
        Utilities.outdent();
    });

    it('015. Verify WSQ ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.wsqValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.outdent();
        Utilities.indent('Verify WSQ equals: ' + data.displayItems.imSWSQ);
        expect(ProductDetailsScreen.wsqValue.getText()).toEqual(
            data.displayItems.imSWSQ.toString()
        );
        Utilities.outdent();
    });

    it('016. Verify Unif Of Measure ', () => {
        Utilities.indent('Swipe Down');
        while (ProductDetailsScreen.umValue.isExisting() === false) {
            Gestures.swipeUp(1);
        }
        Utilities.indent(
            'Verify Unit of measure equals: ' + data.displayItems.imJUM
        );
        Utilities.outdent();
        expect(ProductDetailsScreen.umValue.getText()).toEqual(
            data.displayItems.imJUM
        );
        Utilities.outdent();
    });
});
