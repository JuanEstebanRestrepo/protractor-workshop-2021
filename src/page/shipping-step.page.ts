import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private tShirtShippingStep: ElementFinder;

  constructor () {
    this.tShirtShippingStep = $('#cgv');
  }

  public async goToTShirtShippingStep(): Promise<void> {
    await this.tShirtShippingStep.click();
  }
}
