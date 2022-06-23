import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('CruiseTab', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.sleep(5000)
    await driver.findElement(ep.cruisetab).click()
    await driver.findElement(ep.destination).click()
    await driver.sleep(3000)
    await driver.quit()
})
afterAll(async () => {
    await driver.quit()
})