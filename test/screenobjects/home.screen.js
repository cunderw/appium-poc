import AppScreen from './app.screen';
import Utilities from '../Utilities/Utilities';

const SELECTORS = {
    HOME_SCREEN: 'android=new UiSelector().resourceId("android:id/content")',
    PRODUCTDETAILS_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/clickable_row").instance(0)',
    HOLEVERIFICATION_BUTTON:
        'android=new UiSelector().resourceId("com.oreillyauto.mobilestoretoolbox.emulator:id/clickable_row").instance(1)',
};

class HomeScreen extends AppScreen {
    get holeVerificationButton() {
        return $(SELECTORS.HOLEVERIFICATION_BUTTON);
    }

    get productDetailButton() {
        return $(SELECTORS.PRODUCTDETAILS_BUTTON);
    }

    constructor() {
        super(SELECTORS.HOME_SCREEN);
    }

    navigateToProductDetails() {
        Utilities.indent('Navigating To Product Details');
        this.productDetailButton.click();
        Utilities.outdent();
    }

    navigateToHoleVerification() {
        Utilities.indent('Navigating To Hole Verification');
        this.holeVerificationButton.click();
        Utilities.outdent();
    }
}

export default new HomeScreen();
