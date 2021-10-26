import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private tShirtSummaryStep: ElementFinder;

  constructor () {
    this.tShirtSummaryStep = $('.cart_navigation span');
  }

  public async goToTShirtSummaryStep(): Promise<void> {
    await this.tShirtSummaryStep.click();
  }
}
