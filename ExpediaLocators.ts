import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Expedia extends BasePage {

    //Locators below for interaction with Sign In Test
    accountBtn: By = By.xpath('(//button[@type="button"])[1]')
    signIn: By = By.xpath('//a[@class="uitk-button uitk-button-medium uitk-button-fullWidth uitk-button-has-text uitk-button-primary"]')
    loginEmail: By = By.xpath('//input[@id="loginFormEmailInput"]')
    loginPassword: By = By.xpath('//input[@id="loginFormPasswordInput"]')
   
   //Locators below for interaction with Create Account Test
    signup: By = By.xpath('//a[@class="uitk-button uitk-button-medium uitk-button-fullWidth uitk-button-has-text uitk-button-tertiary"]')
    email: By = By.xpath('//input[@id="signupFormEmailInput"]')
        By = By.name('//a[@name="email"]')
    firstName: By = By.xpath('//input[@id="signupFormFirstNameInput"]')
    FN: By = By.name('//a[@name="firstName"]')
    lastName: By = By.xpath('//input[@id="signupFormLastNameInput"]')
    LN: By = By.name('//a[@name="lastName"]')
    password: By = By.xpath('//input[@id="signupFormPasswordInput"]')
    signupSubmit: By = By.xpath('//button[@id="signupFormSubmitButton"]')
    continueBtn: By = By.xpath('//a[@class="uitk-link uitk-spacing uitk-spacing-padding-blockstart-twelve uitk-flex-item uitk-link-layout-default uitk-type-300"]')
    signOut: By = By.xpath('//div[contains(text(),"Sign out")]')
    signinSubmit: By = By.xpath('//button[@id="loginFormSubmitButton"]')

    //Locators below for interaction with List of Favorites
    favorites: By = By.xpath('//div[contains(text(),"List of favorites")]')
    fav: By = By.xpath('//a[href="/lists"]')
    savefav: By = By.xpath('//input[@aria-label="Save Hotel Zaza Houston Museum District to your lists"]')
   
   //Locators below for interaction with Things to do Test
    thingstodoTab: By = By.xpath('//a[@href="?pwaLob=wizard-lx-pwa"]')
    thingstodoinBtn: By = By.xpath('//button[@class="uitk-fake-input uitk-form-field-trigger"]')
    fromBtn: By = By.xpath('(//button[@class="uitk-faux-input uitk-form-field-trigger"])[1]')
    fromdate: By = By.xpath('//button[@aria-label="Jul 11, 2022"]')
    toBtn: By = By.xpath('//button[@id="d2-btn"]')
    todate: By = By.xpath('//button[@aria-label="Jul 17, 2022"]')
    donebtn: By = By.xpath('//button[@data-stid="apply-date-picker"]')

    //Locators below for interaction with Stays tab
    staysTab: By = By.xpath('//a[@href="?pwaLob=wizard-hotel-pwa-v2"]')
    checkinbtn: By = By.xpath('//button[@id="d1-btn"]')
    checkin: By = By.xpath('(//button[@data-stid="open-date-picker"])[1]')
    checkout: By = By.xpath('(//button[@data-day="10"])[1]')
    location: By = By.xpath('//input[@id="location-field-destination"]')
    hotel: By = By.xpath('//a[@href="/Houston-Hotels-Hotel-Zaza-Houston-Museum-District.h3306.Hotel-Information?chkin=2022-07-04&chkout=2022-07-10&x_pwa=1&rfrr=HSR&pwa_ts=1655763091936&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=true&rm1=a1%3Ac5&regionId=1503&destination=Houston%2C+Texas%2C+United+States+of+America&destType=MARKET&neighborhoodId=553248635976385848&selected=22626937&sort=RECOMMENDED&top_dp=215&top_cur=USD&semdtl=&userIntent=&selectedRoomType=150133&selectedRatePlan=343235"]')
    check: By = By.xpath('(//button[@data-day="12"])[1]')
    out: By = By.xpath('(//button[@data-day="19"])[1]')

    //Locators below for Traveler feature Test
    travelersBtn: By = By.xpath('//button[@data-testid="travelers-field"]')
    increaseadultBtn: By = By.xpath('(//button[@class="uitk-layout-flex-item uitk-step-input-touch-target"])[1]')
    decreaseadultBtn: By = By.xpath('(//span[@class="uitk-step-input-button"])[1]')
    increasechildBtn: By = By.xpath('//*[@aria-label="Increase children in room 1"]//*[name()="svg"]//*[name()="path" and contains(@d,"M19 13h-6v")]')
    childAge: By = By.xpath('//*[@id="child-age-input-0-0"]/option[7]')
    increaseinfantBtn: By = By.xpath('//*[@aria-label="Increase infants in room 1"]//*[name()="svg"]//*[name()="path" and contains(@d,"M19 13h-6v")]')
    infantAge: By = By.xpath('//*[@id="infant-age-input-0-0"]/option[1]')
    dnebtn: By = By.xpath('//button[normalize-space()="Done"]')
   
    //Locators below for interaction Packages Test
    packagesTab: By = By.xpath('//a[@href="?pwaLob=wizard-package-pwa"]')
    stayadded: By = By.xpath('//span[normalize-space()="Stay added"]')
    flightadded: By = By.xpath('//span[normalize-space()="Flight added"]')
    leavingfrombtn: By = By.xpath('//button[@aria-label="Leaving from"]')
    leavewherebtn: By = By.xpath('//button[@data-stid="location-field-origin-dialog-trigger"]')
    goingtobtn: By = By.xpath('//button[@aria-label="Going to"]')
    datesbtn: By = By.xpath('(//a[@href="/?pwaDialog=datepicker-departing-returning"])[1]')
    departure: By = By.xpath('//button[@id="d1-btn"]')
    departdate: By = By.xpath('(//button[@data-day="11"])[1]')
    returningdate: By = By.xpath('(//button[@data-day="19"])[1]')
    searchbtn: By = By.xpath('//button[@type="submit"]')
    sortFilter: By = By.xpath('//button[@aria-label="Sort & Filter"]')
    srtfilt: By = By.xpath('(//*[@class="uitk-field-select"]/option[4])[1]')

    //Locator below for Flight Tab
    Flighttab: By = By.xpath('//a[@href="?pwaLob=wizard-flight-pwa"]')
    oneway: By = By.xpath('//a[@href="?flightType=oneway"]')
    airport: By = By.xpath('//button[@aria-label="Leaving from"]')
    flyto: By = By.xpath('//button[@aria-label="Going to"]')
    deprt: By = By.xpath('//button[@data-stid="open-date-picker"]')
    business: By = By.xpath('//button[@aria-label="Preferred flight class Business class"]')
    datedeprt: By = By.xpath('(//button[@data-day="2"])[1]')

    //Locator below for Cruise
    cruisetab: By = By.xpath('//a[@href="?pwaLob=wizard-cruise-pwa"]')
    destination: By = By.xpath('//*[@id="cruise-destination"]/optgroup[1]/option[7]')
    leaveto: By = By.xpath('//button[@data-name="d1"]')
    leavefrom: By = By.xpath('//button[@data-name="d2"]')
    open: By = By.xpath('(//button[@data-stid="open-date-picker"])[1]')
}