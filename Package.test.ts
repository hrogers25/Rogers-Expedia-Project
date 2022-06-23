import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('Bundle', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.sleep(5000)
    await driver.findElement(ep.packagesTab).click()
    //await driver.findElement(ep.stayadded).click()
    await driver.sleep(2000)
    //await driver.findElement(ep.flightadded).click()
    //await driver.sleep(3000)
    await driver.findElement(ep.travelersBtn).click()
    await driver.sleep(4000)
    await driver.findElement(ep.increaseadultBtn).click()
    await driver.sleep(4000)
    await driver.findElement(ep.increasechildBtn).click()
    await driver.sleep(3000)
    await driver.findElement(ep.childAge).click()
    await driver.findElement(ep.leavingfrombtn).sendKeys("Houston IAH\n")
    await driver.sleep(6000)
    await driver.findElement(ep.goingtobtn).sendKeys("Rome FCO\n")
    await driver.sleep(6000)
    await driver.findElement(ep.departure).click()
    await driver.sleep(4000)
    await driver.findElement(ep.departdate).click()
    await driver.findElement(ep.returningdate).click()
    await driver.sleep(4000)
    await driver.findElement(ep.donebtn).click()
    await driver.sleep(6000)

})
afterAll(async () => {
    await driver.quit()
})