import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  }
};

onPrepare: () => {
  browser.ignoreSynchronization = true;
}
