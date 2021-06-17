const Login = require("../pageobjects/login.page");

describe("Vue.js login", () => {
  it("should open and render", () => {
    Login.open();
    browser.saveScreenshot("./tests/e2e/screenshots/login.png");
    expect(Login.inputs).toExist();
  });

  it("should open and introduce user not logged", () => {
    Login.open();
    Login.inputs[0].setValue("sergio");
    Login.inputs[1].setValue("123");
    Login.button.click();
    browser.pause(2000);
    browser.saveScreenshot("./tests/e2e/screenshots/alert.png");
  });

  it("should open and introduce user logged", () => {
    Login.open();
    browser.execute(
      (keyName, keyValue) => {
        localStorage.setItem(keyName, keyValue);
      },
      "sergio:123",
      new Date()
    );
    Login.inputs[0].setValue("sergio");
    Login.inputs[1].setValue("123");
    Login.button.click();
    browser.pause(2000);
    browser.saveScreenshot("./tests/e2e/screenshots/logged.png");
  });
});
