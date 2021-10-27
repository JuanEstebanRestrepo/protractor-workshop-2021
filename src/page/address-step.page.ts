import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private tShirtAddressStep: ElementFinder;

  constructor () {
    this.tShirtAddressStep = $('#center_column > form > p > button > span');
  }

  public async goToTShirtAddressStep(): Promise<void> {
    await this.tShirtAddressStep.click();
  }
}
