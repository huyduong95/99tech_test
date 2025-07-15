import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';
import { UserModel } from '../models/userModel';

export class AdminPage extends BasePage {

  private userNameInput = this.page.locator(`//label[text()='Username']/ancestor::div[contains(@class, 'oxd-input-group')]//input`)
  private searchButton = this.page.locator(`//button[normalize-space()='Search']`);

  private recordRows = this.page.locator(`//div[@role='row']`);
  private recordTable = this.page.locator('div.oxd-table-header');

  constructor(page: Page) {
    super(page);
  }

  async waitforRecordLoading(): Promise<void> {
    await this.recordTable.waitFor({ state: 'detached' });
  }

  async searchByUserName(inputText: string): Promise<void> {
    await this.userNameInput.fill(inputText);
    await this.searchButton.click();
    await this.waitforRecordLoading();
  }

  async verifyRecordsTable(lstEmployee: UserModel[]): Promise<void> {
    for (let i = 0; i < lstEmployee.length; i++) {
      const employee = lstEmployee[i];
      const status = employee.status ? 'Enabled' : "Disabled"
      const expectedEmployeeValue = `${employee.username}${employee.role}${employee.name}${status}`;
      const acutalRecordDisplay = await this.recordRows.nth(i + 1).textContent();
      expect(acutalRecordDisplay).toBe(expectedEmployeeValue)
    }

    const liCount = lstEmployee.length;
    expect(liCount).toBe(await this.recordRows.count() - 1);
  }

}
