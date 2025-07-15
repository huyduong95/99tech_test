import { test } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_ADMIN_001] Search admin with exact match username @ui @regression @admin @admin_search @TC_ADMIN_001', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.clickNavItem(testData.navItems.admin);

  await mainPage.adminPage.searchByUserName(testData.userInformation.user1.username);
  await mainPage.adminPage.verifyRecordsTable([testData.userInformation.user1]);
});
