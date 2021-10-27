import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private tShirtBankPayment: ElementFinder;

  constructor () {
    this.tShirtBankPayment = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToTShirtBankPayment(): Promise<void> {
    await this.tShirtBankPayment.click();
  }
}
