"use strict";

require("chromedriver");
const webdriver = require("selenium-webdriver");
const { By, Key, until } = require("selenium-webdriver");
const chai = require("chai");
const { assert, expect } = require("chai");
const ShopQaHomePage = require("../pages/home_page");
const RegistrationPage = require("../pages/regisister_page");
const LoginPage = require("../pages/login_page");

describe("Shop.qa.rs test", () => {
  let driver;
  let shopQaHomePage;
  let registrationPage;
  let loginPage;
  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
    shopQaHomePage = new ShopQaHomePage(driver);
    registrationPage = new RegistrationPage(driver);
    loginPage = new LoginPage(driver);
  });
  after(async () => {
    // await driver.sleep(5000);
    await driver.quit();
  });
  it("Open Shop.qa.rs", async () => {
    await shopQaHomePage.goToHomePage();
    const pageH1 = await shopQaHomePage.getPageH1();
    assert.equal(pageH1, "Quality Assurance (QA) Shop");
  });
  it("Click Register button", async () => {
    const registerBtn = await shopQaHomePage.getRegisterBtn();
    registerBtn.click();
  });
  it("Register user", async () => {
    const registrationForm = await registrationPage.getRegistrationForm();
    expect(await registrationForm).to.be.true;
    const firstName = await registrationPage.getFirstName();
    firstName.sendKeys("Milan");
    const lastName = await registrationPage.getLastName();
    lastName.sendKeys("Pilic");
    const email = await registrationPage.getEmail();
    email.sendKeys("milan@loc.local");
    const username = await registrationPage.getUsername();
    username.sendKeys("Milance");
    const password = await registrationPage.getPassword();
    password.sendKeys("Milan123");
    const confirmPassword = await registrationPage.getConfirmPassword();
    confirmPassword.sendKeys("Milan123");
    const register = await registrationPage.getRegisterBtn();
    register.click();
    const loginMesage = await shopQaHomePage.getLoginMesage();
    expect(loginMesage).to.contain("Uspeh!");
  });
  it("Login user", async () => {
    await loginPage.goToLoginPage();
    const userNameField = await loginPage.getUserNameField();
    userNameField.sendKeys("Milance");
    const passwordField = await loginPage.getPasswordField();
    passwordField.sendKeys("Milan123");
    const loginBtn = await loginPage.getLoginBtn();
    loginBtn.click();
    const welcomeMesage = await shopQaHomePage.getWelcomeMesage();
    expect(welcomeMesage).to.contain("Welcome back,");
  });
});
