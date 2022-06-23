import {Expedia} from './ExpediaLocators'
import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver'

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()
const ep = new Expedia

test('Stay,Travelers, and Favorite ', async () => {
    await driver.get('https://www.expedia.com/')
    await driver.findElement(ep.staysTab).click()
    await driver.sleep(4000)
    await driver.findElement(ep.travelersBtn).click()
    await driver.sleep(4000)
    await driver.findElement(ep.increaseadultBtn).click()
    await driver.sleep(4000)
    await driver.findElement(ep.increasechildBtn).click()
    await driver.sleep(3000)
    await driver.findElement(ep.childAge).click()
    await driver.sleep(3000)
    await driver.findElement(ep.dnebtn).click()
    await driver.findElement(ep.goingtobtn).click()
    await driver.findElement(ep.location).sendKeys("Downtown Houston\n")
    await driver.sleep(4000)
    await driver.findElement(ep.checkinbtn).click()
    await driver.findElement(ep.checkin).click()
    await driver.findElement(ep.checkout).click()
    await driver.sleep(3000)
    await driver.findElement(ep.donebtn).click()
    await driver.sleep(4000)
   // await driver.findElement(ep.searchbtn).click()
    //await driver.sleep(20000)
   // await driver.wait(until.elementLocated(ep.hotel))
   // await driver.findElement(ep.savefav).click()
   // await driver.sleep(8000)
   // await driver.findElement(ep.accountBtn).click()
   // await driver.findElement(ep.fav).click()
   // await driver.sleep(5000)

})
afterAll(async () => {
    await driver.quit()
})