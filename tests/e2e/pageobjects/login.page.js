class Login {
  /**
   * elements
   */
  get inputs() {
    return browser.$$("input");
  }

  get button() {
    return browser.$("button");
  }

  /**
   * methods
   */
  open(path = "/") {
    browser.url(path);
  }
}

module.exports = new Login();
