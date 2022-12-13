"use strict";

const { By } = require("selenium-webdriver");

module.exports = class RegistrationPage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  goToRegisterPage() {
    this.#driver.get("http://shop.qa.rs/register");
  }
  getRegistrationForm() {
    return this.#driver
      .findElement(By.xpath(`/html/body/div[3]/form`))
      .isDisplayed();
  }
  getFirstName() {
    return this.#driver.findElement(By.name("ime"));
  }
  getLastName() {
    return this.#driver.findElement(By.name("prezime"));
  }
  getEmail() {
    return this.#driver.findElement(By.name("email"));
  }
  getUsername() {
    return this.#driver.findElement(By.name("korisnicko"));
  }
  getPassword() {
    return this.#driver.findElement(By.name("lozinka"));
  }
  getConfirmPassword() {
    return this.#driver.findElement(By.name("lozinkaOpet"));
  }
  getRegisterBtn() {
    return this.#driver.findElement(By.name("register"));
  }
};
