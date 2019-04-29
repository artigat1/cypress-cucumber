import { When, Then } from 'cypress-cucumber-preprocessor/steps';

import GoogleSearchPage from '../../../pages/google/google-search-page';
import GoogleResultsPage from '../../../pages/google/google-results-page';

When(/^Press 'Search'$/, () => {
    GoogleSearchPage.pressSearch();
});

Then(/^I have some results$/, () => {
    GoogleResultsPage.expect().toHaveResults();
});


// describe('Google Search', () => {
//     it('Doctorlink is 1st search result', () => {
//         const query = 'doctorlink';
//         const link = 'https://www.doctorlink.com/';
//
//         GoogleSearchPage.visit();
//         cy.url().should('include', 'google');
//
//         GoogleSearchPage.type(query);
//
//         GoogleSearchPage.pressSearch();
//
//         cy.get(`a[href="${link}"`)
//             .first()
//             .should('have.attr', 'href', link);
//
//     });
// });