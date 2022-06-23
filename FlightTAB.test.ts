import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('Flight', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.findElement(ep.Flighttab).click()
    await driver.sleep(3000)
    await driver.findElement(ep.oneway).click()
    await driver.sleep(3000)
    await driver.findElement(ep.airport).sendKeys("Houston IAH\n")
    await driver.sleep(4000)
    await driver.findElement(ep.flyto).sendKeys("Rio de Janeiro RIO\n")
    await driver.sleep(3000)
    await driver.findElement(ep.deprt).click()
    await driver.findElement(ep.datedeprt).click()
    await driver.findElement(ep.donebtn)
    await driver.sleep(3000)
})
afterAll(async () => {
    await driver.quit()
})