import HomeScreen from '../screenobjects/home.screen';
import ProductDetailsScreen from '../screenobjects/product-details.screen';
import HoleVerificationSessionsScreen from '../screenobjects/hole-verification-sessions.screen';
import Utilities from '../Utilities/Utilities';
describe('Home Screen Navigation', () => {
    beforeEach(() => {
        HomeScreen.waitForIsShown();
    });
    it('001. Navigate to Product Details', () => {
        Utilities.indent('Verify On Main Home Screen');
        expect(HomeScreen.getScreenTitle()).toEqual('TOOLBOX');
        Utilities.outdent();
        HomeScreen.navigateToProductDetails();
        Utilities.indent('Verify On Product Details Screen');
        expect(ProductDetailsScreen.getScreenTitle()).toEqual(
            'PRODUCT DETAILS'
        );
        Utilities.outdent();
        ProductDetailsScreen.navigateBack();
        Utilities.indent('Verify On Main Home Screen');
        expect(HomeScreen.getScreenTitle()).toEqual('TOOLBOX');
        Utilities.outdent();
    });

    it('002. Navigate to Hole Verification', () => {
        Utilities.indent('Verify On Main Home Screen');
        expect(HomeScreen.getScreenTitle()).toEqual('TOOLBOX');
        Utilities.outdent();
        HomeScreen.navigateToHoleVerification();
        Utilities.indent('Verify On Hole Verification Screen');
        expect(HoleVerificationSessionsScreen.getScreenTitle()).toEqual(
            'HOLE VERIFICATION'
        );
        Utilities.outdent();
        HoleVerificationSessionsScreen.navigateBack();
        Utilities.indent('Verify On Main Home Screen');
        expect(HomeScreen.getScreenTitle()).toEqual('TOOLBOX');
        Utilities.outdent();
    });
});
