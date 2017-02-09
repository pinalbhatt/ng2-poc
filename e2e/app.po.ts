import { browser, element, by } from 'protractor';

export class LearnAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('poc-root h1')).getText();
  }
}
