import GoogleSearchPage from '../pages/google/google-search-page';

describe('Go to Google search', function() {
    it('Search for Doctorlink', function() {
        const query = 'doctorlink';
        
        GoogleSearchPage.visit();
        cy.url().should('include', 'google');

        GoogleSearchPage.type(query);

        GoogleSearchPage.pressSearch();

    });
});