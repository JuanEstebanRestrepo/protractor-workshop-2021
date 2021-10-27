import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private tShirtProductList: ElementFinder;

  constructor () {
    this.tShirtProductList = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToTShirtProductList(): Promise<void> {
    await this.tShirtProductList.click();
  }
}
