import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private tShirtOrderSummary: ElementFinder;

  constructor () {
    this.tShirtOrderSummary = $('#cart_navigation > button > span');
  }

  public async goToTShirtOrderSummary(): Promise<void> {
    await this.tShirtOrderSummary.click();
  }
}
