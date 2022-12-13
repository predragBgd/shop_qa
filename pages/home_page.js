"use strict";

const { By, until } = require("selenium-webdriver");

module.exports = class ShopQaHomePage {
  #driver;
  constructor(webdriver) {
    this.#driver = webdriver;
  }
  goToHomePage() {
    this.#driver.get("http://shop.qa.rs");
  }
  getPageH1() {
    return this.#driver.findElement(By.css("h1")).getText();
  }
  getRegisterBtn() {
    return this.#driver.findElement(
      By.xpath(`/html/body/div[2]/div[3]/div[2]/a`)
    );
  }
  async getLoginMesage() {
    await this.#driver.wait(
      until.elementLocated(By.xpath(`/html/body/div[2]`))
    );
    return this.#driver.findElement(By.xpath(`/html/body/div[2]`)).getText();
  }
  async getWelcomeMesage() {
    await this.#driver.wait(until.elementLocated(By.xpath(`//h2`)));
    return this.#driver.findElement(By.xpath(`//h2`)).getText();
  }
};
