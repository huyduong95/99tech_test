import { expect, Page } from '@playwright/test';
import { BasePage } from '../basePage';

export class NavBar extends BasePage {

  private searchbox = this.page.locator(`//div[@class='oxd-main-menu-search']//input`);
  private lstNavItemsEle = this.page.locator(`ul.oxd-main-menu li.oxd-main-menu-item-wrapper`);
  private navItem = (item: string) => {
    return this.page.locator(`//span[text()='${item}']`)
  }

  constructor(page: Page) {
    super(page);
  }

  async searchFor(item: string) {
    await this.searchbox.fill(item)
  }

  async verifyListNavItemDisplay(lstNavItems: string[]) {
    for (const item of lstNavItems) {
      const navItem = this.navItem(item);
      await navItem.waitFor({ state: 'visible' });
    }
    const liCount = lstNavItems.length;
    expect(liCount).toBe(await this.lstNavItemsEle.count());
  }

  async clickNavItem(item: string) {
    await this.navItem(item).click();
  }
}

