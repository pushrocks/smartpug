import 'typings-test'
import * as should from 'should'
import * as smartpug from '../dist/index'

describe('smartpug',function() {
    let testSmartpug: smartpug.Smartpug
    it('should create a valid instance', function() {
        testSmartpug = new smartpug.Smartpug({
            filePath: './test/test.pug'
        })
        should(testSmartpug).be.instanceof(smartpug.Smartpug)
    })
    it('should create a valid html string', function() {
        let resultHtml = testSmartpug.getHtmlForData({testValue: 'Hello'})
        console.log(resultHtml)
        should(/Hello/.test(resultHtml)).be.true()
    })
})
