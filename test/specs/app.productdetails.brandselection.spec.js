import HomeScreen from '../screenobjects/home.screen';
import ProductDetailsScreen from '../screenobjects/product-details.screen';
import BrandPopup from '../screenobjects/components/brand.popup';
import { TEST_PRODUCT } from '../constants';
import Utilities from '../Utilities/Utilities';
const line = TEST_PRODUCT.line;
const item = TEST_PRODUCT.item;

describe('Product Details Brand Selection', () => {
    describe('Brand Selection Display', () => {
        it('001. Navigation', () => {
            HomeScreen.waitForIsShown();
            HomeScreen.navigateToProductDetails();
        });

        it('002. Verify Entering Nothing', () => {
            Utilities.indent('Verify popup does not display');
            ProductDetailsScreen.addProduct('', '', true);
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('003. Verify Entering Only Line', () => {
            Utilities.indent('Verify popup does not display');
            ProductDetailsScreen.addProduct(line, '', true);
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('004. Verify Entering Only Item Number', () => {
            Utilities.indent('Verify popup displays.');
            ProductDetailsScreen.addProduct('', item, true);
            BrandPopup.waitForPopup();
            expect(BrandPopup.popUp.isDisplayed()).toEqual(true);
            Utilities.outdent();
        });
    });

    describe('Brand Select Popup Actions', () => {
        it('001. Verify Clicking Cancel', () => {
            Utilities.indent('Verify Popup Closes');
            BrandPopup.cancelButton.touchAction('tap');
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('002. Verify Selecting Brand', () => {
            Utilities.indent('Navigation');
            ProductDetailsScreen.addProduct('', item, true);
            BrandPopup.waitForPopup();
            Utilities.outdent();

            Utilities.indent(
                'Verify when a brand is selected, details are show'
            );
            BrandPopup.selectBrand(line, true);
            ProductDetailsScreen.waitForProductDetails();
            expect(ProductDetailsScreen.lineItemValue.getText()).toEqual(
                line + ' ' + item
            );
            Utilities.outdent();
        });
    });
});
