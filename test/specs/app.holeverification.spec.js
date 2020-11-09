import TestData from '../Utilities/test.data';
import HomeScreen from '../screenobjects/home.screen';
import HoleVerificationSessionsScreen from '../screenobjects/hole-verification-sessions.screen';
import HoleVerificationScreen from '../screenobjects/hole-verification.screen';
import HoleVerificationItemInfo from '../screenobjects/components/holeverification.iteminfo';
import { TEST_PRODUCT, USER } from '../constants';
import Utilities from '../Utilities/Utilities';
const custNum = '1';

describe('Hole Verification: Selection', () => {
    it('001. Navigation To Hole Verification', () => {
        Utilities.indent('Navigation');
        HomeScreen.navigateToHoleVerification();
        expect(HoleVerificationSessionsScreen.getScreenTitle()).toEqual(
            'HOLE VERIFICATION'
        );
        Utilities.outdent();
    });
    it('002. Verify New Session Can', () => {
        Utilities.indent('Verify adding new session');
        HoleVerificationSessionsScreen.addSession(USER.tmNumber);
        Utilities.outdent();
    });
    const line = TEST_PRODUCT.line;
    const item = TEST_PRODUCT.item;
    const data = TestData.getItemInfo(line, item, custNum);
    let ItemInfo;
    it('002. Verify Item Addition', () => {
        Utilities.indent('Verify Item can be added');
        HoleVerificationScreen.addProduct(line, item, true, true);
        ItemInfo = new HoleVerificationItemInfo(0);
        expect(ItemInfo.lineItemValue).toEqual(line + ' ' + item);
        Utilities.outdent();
    });

    it('003. Verify Description', () => {
        Utilities.indent(
            'Verify Description equals: ' + data.rcatSearch.shortDescription
        );
        expect(ItemInfo.itemDescripctionValue).toEqual(
            data.rcatSearch.shortDescription
        );
        Utilities.outdent();
    });

    it('004. Verify Current Price', () => {
        Utilities.indent(
            'Verify Current Price equals:' + data.displayItems.imUser.toString()
        );
        expect(ItemInfo.itemCurrentPriceValue).toEqual(
            '$' + data.displayItems.imUser.toString()
        );
        Utilities.outdent();
    });

    it('005. Verify QOH', () => {
        Utilities.indent(
            'Verify Current Price equals: ' + data.displayItems.imQOH
        );
        expect(ItemInfo.itemQOHValue).toEqual(
            data.displayItems.imQOH.toString()
        );
        Utilities.outdent();
    });

    it('006. Verify Quantity Needed', () => {
        Utilities.indent('Verify Quantity Needed equals: 1');
        expect(ItemInfo.itemQtyNeededValue).toEqual('1');
    });
});
