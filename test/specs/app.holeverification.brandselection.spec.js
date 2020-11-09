import HomeScreen from '../screenobjects/home.screen';
import HoleVerificationSessionsScreen from '../screenobjects/hole-verification-sessions.screen';
import HoleVerificationScreen from '../screenobjects/hole-verification.screen';
import HoleVerificationItemInfo from '../screenobjects/components/holeverification.iteminfo';
import BrandPopup from '../screenobjects/components/brand.popup';
import { TEST_PRODUCT, USER } from '../constants';
import Utilities from '../Utilities/Utilities';
const line = TEST_PRODUCT.line;
const item = TEST_PRODUCT.item;

describe('Hole Verification Brand Selection', () => {
    describe('Brand Selection Display', () => {
        it('001. Navigation', () => {
            Utilities.indent('Navigation');
            HomeScreen.waitForIsShown();
            HomeScreen.navigateToHoleVerification();
            HoleVerificationSessionsScreen.addSession(USER.tmNumber);
            Utilities.outdent();
        });

        it('002. Verify Entering Nothing', () => {
            Utilities.indent('Verify popup does not display');
            HoleVerificationScreen.addProduct('', '', true);
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('003. Verify Entering Only Line', () => {
            Utilities.indent('Verify popup does not display');
            HoleVerificationScreen.addProduct(line, '', true);
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('004. Verify Entering Only Item Number', () => {
            Utilities.indent('Verify popup displays.');
            HoleVerificationScreen.addProduct('', item, true);
            BrandPopup.waitForPopup();
            expect(BrandPopup.popUp.isDisplayed()).toEqual(true);
            Utilities.outdent();
        });
    });

    describe('Brand Popup Actions', () => {
        it('001. Verify Clicking Cancel', () => {
            Utilities.indent('Verify Popup Closes');
            BrandPopup.cancelButton.touchAction('tap');
            expect(BrandPopup.popUp.isExisting()).toEqual(false);
            Utilities.outdent();
        });

        it('002. Verify Selecting Brand', () => {
            Utilities.indent('Navigations');
            HoleVerificationScreen.addProduct('', item, true);
            BrandPopup.waitForPopup();
            Utilities.outdent();

            Utilities.indent('Verify product is displayed');
            BrandPopup.selectBrand(line, true);
            const ItemInfo = new HoleVerificationItemInfo(0);
            expect(ItemInfo.lineItemValue).toEqual(line + ' ' + item);
            Utilities.outdent();
        });
    });
});
