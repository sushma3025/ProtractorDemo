
let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {
    it('addition test', function () {
       
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('7');
        homepage.clickGo();
        homepage.verifyOutput('11');
        browser.sleep(5000);

    });

    it('subtraction test', function () {
       
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('7');
        homepage.clickGo1();
        homepage.verifyOutput('11');
        browser.sleep(5000);

    });



})

//browser.get('http://juliemr.github.io/protractor-demo/');
        // var input = element(by.model('second'));
        // input.sendKeys('3');
        // element(by.css('[ng-click="doAddition()"]')).click();
        // let result = element(by.cssContainingText('.ng-binding', '8'));
        // expect(result.getText()).toEqual('8');

