"use strict";

const { By } = require("selenium-webdriver");

module.exports = class LoginPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  goToLoginPage() {
    this.#driver.get("http://shop.qa.rs/login");
  }
  getUserNameField() {
    return this.#driver.findElement(By.name("username"));
  }
  getPasswordField() {
    return this.#driver.findElement(By.name("password"));
  }
  getLoginBtn() {
    return this.#driver.findElement(By.name("login"));
  }
};
