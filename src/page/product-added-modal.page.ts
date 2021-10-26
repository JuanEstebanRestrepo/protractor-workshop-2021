import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private tShirtProductAddedModal: ElementFinder;

  constructor () {
    this.tShirtProductAddedModal = $('[style*="display: block;"] .button-container > a');
  }

  public async goToTShirtProductAddedModal(): Promise<void> {
    await this.tShirtProductAddedModal.click();
  }
}
