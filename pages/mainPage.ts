import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { NavBar } from './components/navBar';
import { AdminPage } from './adminPage';

export class MainPage extends BasePage {
  // Composition: Include the NavBar component
  public readonly navBar: NavBar;
  public readonly adminPage: AdminPage;

  constructor(page: Page) {
    super(page);
    this.navBar = new NavBar(this.page);
    this.adminPage = new AdminPage(this.page)
  }
}
