let homepage = function () {



    let firstNum_input = element(by.model('first'));
    let secondNum_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));


    this.get = function (url) {
        browser.get(url);
    };

    this.enterFirstNumber = function (firstNo) {
        firstNum_input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function (secondNo) {

        secondNum_input.sendKeys(secondNo);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyOutput = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }


};

module.exports = new homepage();
