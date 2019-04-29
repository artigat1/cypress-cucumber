class Browser {
    // You can use Browser class to do some typical things, like
    // login, etc.

    static expect() {
        return {
            toBeInOtherDomain: (domain) => cy.url().should('include', domain),
        };
    }
}

export default Browser;