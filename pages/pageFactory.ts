import { Page } from '@playwright/test';
import { LoginPage } from './loginPage';
import { MainPage } from './mainPage';

export class PageFactory {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get loginPage(): LoginPage {
    return new LoginPage(this.page);
  }

  public get mainPage(): MainPage {
    return new MainPage(this.page);
  }
}
