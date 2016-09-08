"use strict";
require("typings-test");
const should = require("should");
const smartpug = require("../dist/index");
describe('smartpug', function () {
    let testSmartpug;
    it('should create a valid instance', function () {
        testSmartpug = new smartpug.Smartpug({
            filePath: './test/test.pug'
        });
        should(testSmartpug).be.instanceof(smartpug.Smartpug);
    });
    it('should create a valid html string', function () {
        let resultHtml = testSmartpug.getHtmlForData({ testValue: 'Hello' });
        console.log(resultHtml);
        should(/Hello/.test(resultHtml)).be.true();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFDaEMsMENBQXlDO0FBRXpDLFFBQVEsQ0FBQyxVQUFVLEVBQUM7SUFDaEIsSUFBSSxZQUErQixDQUFBO0lBQ25DLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNqQyxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLG1DQUFtQyxFQUFFO1FBQ3BDLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQTtRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQzlDLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==