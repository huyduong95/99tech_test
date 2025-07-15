import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';


export class LoginPage extends BasePage {

  private usernameBox = this.page.locator(`//input[@name='username']`);
  private passwordBox = this.page.locator(`//input[@name='password']`);
  private loginButton = this.page.locator(`//button[@type='submit']`);
  private errorMessasge = this.page.locator(`//div[@role='alert']`);
  private usernameErrorMessage = this.page.locator(`//div[./input[@name='username']]//following-sibling::span`);
  private passwordErrorMessage = this.page.locator(`//div[./input[@name='password']]//following-sibling::span`);

  constructor(page: Page) {
    super(page);
  }

  async fillUsernameBox(username: string) {
    await this.usernameBox.fill(username);
  }

  async fillPasswordBox(passwordName: string) {
    await this.passwordBox.fill(passwordName);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(username: string, password: string): Promise<void> {
    await this.fillUsernameBox(username);
    await this.fillPasswordBox(password);
    await this.clickLoginButton();
  }

  async verifyErrorMessageDisplay(message: string): Promise<void> {
    const actualMessage = await this.errorMessasge.textContent();
    expect(actualMessage).toBe(message);
  }

  async verifyRequiredPasswordErrorMessage(message: string): Promise<void> {
    const actualMessage = await this.passwordErrorMessage.textContent();
    expect(actualMessage).toBe(message);
  }

  async verifyRequiredUsernameErrorMessage(message: string): Promise<void> {
    const actualMessage = await this.usernameErrorMessage.textContent();
    expect(actualMessage).toBe(message);
  }

  /**
   * Navigates directly to the login page.
   */

  async navigateToLogin(): Promise<void> {
    await this.navigate('/login');
  }
}
