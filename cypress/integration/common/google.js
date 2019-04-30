import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import GoogleSearchPage from '../../pages/google/google-search-page';

Given(/^I'm at Google$/, () => {
    GoogleSearchPage.visit();
});

When(/^I type search word 'doctorlink'$/, () => {
    GoogleSearchPage.type('doctorlink');
    // Take a snapshot for visual diffing
    cy.percySnapshot('Google page with search filled');
});