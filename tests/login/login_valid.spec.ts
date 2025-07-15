import { test, expect } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_LOGIN_001] Login with valid credentials @ui @regression @login', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(testData.navItems.admin);
});
