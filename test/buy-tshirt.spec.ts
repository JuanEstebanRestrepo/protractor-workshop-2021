import { $, browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductAddedModalPage, SummaryStepPage,
          SignInStepPage, AddressStepPage, ShippingStepPage, PaymentStepPage,
          BankPaymentPage, OrderSummaryPage } from '../src/page';

/*describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {

    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToTShirtProductList();
    await productAddedModalPage.goToTShirtProductAddedModal();
    await summaryStepPage.goToTShirtSummaryStep();

    await signInStepPage.goToTShirtSignInStep();

    await addressStepPage.goToTShirtAddressStep();

    await shippingStepPage.goToTShirtShippingStep();

    await paymentStepPage.goToTShirtPaymentStep();
    await bankPaymentPage.goToTShirtBankPayment();
    await orderSummaryPage.goToTShirtOrderSummary();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });
});*/

describe('Abrir la página en el navegador', () => {

  it('open page', async () => {
    await browser.get('http://automationpractice.com/');
  });
});

describe('Proceso de compra de la Camiseta', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  it('selected t-shirt', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.goToTShirtProductList();
    await productAddedModalPage.goToTShirtProductAddedModal();
    await summaryStepPage.goToTShirtSummaryStep();
  });
});

describe('Logeo en la aplicación', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage();

  it('logged in', async () => {
    await signInStepPage.goToTShirtSignInStep();
  });
});

describe('Seleccionar la dirección por defecto', () => {
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();

  it('selected address', async () => {
    await addressStepPage.goToTShirtAddressStep();
    await shippingStepPage.goToTShirtShippingStep();
  });
});

describe('Pago en el banco', () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();


  it('paid in the bank', async () => {
    await paymentStepPage.goToTShirtPaymentStep();
    await bankPaymentPage.goToTShirtBankPayment();
    await orderSummaryPage.goToTShirtOrderSummary();

    await expect($('#block_top_menu > ul > li:nth-child(3)').getText())
      .toBe('T-SHIRTS');
  });
});
