import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('Things', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.findElement(ep.thingstodoTab).click()
    await driver.findElement(ep.thingstodoinBtn).sendKeys("Rome FCO\n")
    await driver.sleep(3000)
    await driver.findElement(ep.fromBtn).click()
    await driver.sleep(2000)
    await driver.findElement(ep.todate).click()
    await driver.sleep(3000)
    await driver.findElement(ep.donebtn).click()
    await driver.sleep(5000)
    await driver.findElement(ep.searchbtn).click()
    await driver.sleep(8000)
})
afterAll(async () => {
    await driver.quit()
})