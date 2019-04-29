import { When, Then } from 'cypress-cucumber-preprocessor/steps';

import Browser from '../../../pages/browser';
import GoogleSearchPage from '../../../pages/google/google-search-page';

When(/^Press 'Feel Lucky'$/, () => {
    GoogleSearchPage.pressFeelLucky();
});

Then(/^I am redirected to another domain$/, () => {
    Browser.expect().toBeInOtherDomain('doctorlink.com');
});