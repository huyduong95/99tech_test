import { test } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_LOGIN_002] Login with invalid Username credentials @ui @regression @login @TC_LOGIN_002', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.invalid.user, testData.credentials.valid.password);
  await loginPage.verifyErrorMessageDisplay(testData.messages.invalid_login);
});

test('[TC_LOGIN_003] Login with invalid password credentials @ui @regression @login', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.valid.user, testData.credentials.invalid.password);
  await loginPage.verifyErrorMessageDisplay(testData.messages.invalid_login);
});

test('[TC_LOGIN_004] Login with invalid Username + password credentials @ui @regression @login', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.login(testData.credentials.invalid.user, testData.credentials.invalid.password);
  await loginPage.verifyErrorMessageDisplay(testData.messages.invalid_login);
});
