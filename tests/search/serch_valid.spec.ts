import { test } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_SEARCH_001] Search nav with exact match @ui @regression @navbar @navbar_search @TC_SEARCH_001', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(testData.navItems.admin);
  await mainPage.navBar.verifyListNavItemDisplay([testData.navItems.admin]);
});

test('[TC_SEARCH_002] Search nav with exact match (Search with lowercase) @ui @regression @navbar @navbar_search @TC_SEARCH_002', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(testData.navItems.admin.toLowerCase());
  await mainPage.navBar.verifyListNavItemDisplay([testData.navItems.admin]);
});

test('[TC_SEARCH_003] Search nav with exact match (Search with uppercase) @ui @regression @navbar @navbar_search @TC_SEARCH_003', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(testData.navItems.admin.toUpperCase());
  await mainPage.navBar.verifyListNavItemDisplay([testData.navItems.admin]);
});

test('[TC_SEARCH_004] Search nav with exact match (Search with partial match) @ui @regression @navbar @navbar_search @TC_SEARCH_004', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  const searchKey = DataLoader.abbreviate(testData.navItems.admin);
  await mainPage.navBar.searchFor(searchKey);
  await mainPage.navBar.verifyListNavItemDisplay([testData.navItems.admin]);
});

test('[TC_SEARCH_005] Search nav with only 1 character @ui @regression @navbar @navbar_search @TC_SEARCH_005', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor('A');
  await mainPage.navBar.verifyListNavItemDisplay(Object.values(testData.navItems)
    .filter(item => item.includes('A') || item.includes('a')));
});