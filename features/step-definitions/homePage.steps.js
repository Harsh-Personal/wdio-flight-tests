import {Given, When, Then} from 'cucumber'
import { expect } from "chai";
import { homePage } from "../pages/homePage";

Given(/^I am on Skyscanner HomePage$/, () => {
    homePage.visitHomePage()
})

Then(/^I see Skyscanner Logo$/, () => {
    expect(homePage.verifySkyscannerLogo()).to.be.true
})