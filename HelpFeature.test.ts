import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('VirtualAssistantt', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.findElement(ep.supportbtn).click()
    await driver.sleep(6000)
    await driver.findElement(ep.chatbtn).click()
    await driver.sleep(5000)
})
afterAll(async () => {
    await driver.quit()
})