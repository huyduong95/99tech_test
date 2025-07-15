import { test } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_SEARCH_006] Search nav with Empty search @ui @regression @navbar @navbar_search @TC_SEARCH_006', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor('');
  await mainPage.navBar.verifyListNavItemDisplay(Object.values(testData.navItems));
});

test('[TC_SEARCH_007] Search nav with Only spaces @ui @regression @navbar @navbar_search @TC_SEARCH_007', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(' ');
  await mainPage.navBar.verifyListNavItemDisplay(Object.values(testData.navItems)
    .filter(item => item.includes(' ')));
});

test('[TC_SEARCH_008] Search nav with Special characters only @ui @regression @navbar @navbar_search @TC_SEARCH_008', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor('@#$%');
  await mainPage.navBar.verifyListNavItemDisplay([]);
});

test('[TC_SEARCH_009] Search nav with SQL injection attempt @ui @regression @navbar @navbar_search @TC_SEARCH_009', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor('; DROP TABLE users--');
  await mainPage.navBar.verifyListNavItemDisplay([]);
});

test('[TC_SEARCH_010] Search nav with XSS attempt @ui @regression @navbar @navbar_search @TC_SEARCH_010', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(`<script>alert('XSS')</script>`);
  await mainPage.navBar.verifyListNavItemDisplay([]);
});

test('[TC_SEARCH_011] Search nav with Non-existent data @ui @regression @navbar @navbar_search @TC_SEARCH_010', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.valid.password);

  const mainPage = pages.mainPage;
  await mainPage.navBar.searchFor(`ZZZZZ99999`);
  await mainPage.navBar.verifyListNavItemDisplay([]);
});