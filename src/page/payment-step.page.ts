import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private tShirtPaymentStep: ElementFinder;

  constructor () {
    this.tShirtPaymentStep = $('#form > p > button > span');
  }

  public async goToTShirtPaymentStep(): Promise<void> {
    await this.tShirtPaymentStep.click();
  }
}
