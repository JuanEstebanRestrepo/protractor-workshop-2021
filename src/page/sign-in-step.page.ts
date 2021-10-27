import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private tShirtSignInStep: ElementFinder;

  constructor () {
    this.tShirtSignInStep = $('#SubmitLogin > span');
  }

  public async goToTShirtSignInStep(): Promise<void> {
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await this.tShirtSignInStep.click();
  }
}
