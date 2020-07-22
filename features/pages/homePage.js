class HomePage {

    get homePageLogo() { return $('svg.bpk-logo_bpk-logo__2jfMA bpk-logo_bpk-logo__inline__1A8Uo Logo_Logo__svg__1kg5V')}

    visitHomePage() {
        browser.url('/')
    }

    verifySkyscannerLogo() {
        return this.homePageLogo.isDisplayed()
    }

}

export const homePage = new HomePage();