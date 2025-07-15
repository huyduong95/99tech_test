import { test } from '@playwright/test';
import { DataLoader } from '../../ultils/dataLoader';
import { PageFactory } from '../../pages/pageFactory';

test('[TC_LOGIN_005] Login with missing password credentials @ui @regression @login @TC_LOGIN_005', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.fillUsernameBox(testData.credentials.valid.user);
  await loginPage.clickLoginButton();
  await loginPage.verifyRequiredPasswordErrorMessage(testData.messages.required);
});

test('[TC_LOGIN_006] Login with missing username credentials @ui @regression @login @TC_LOGIN_006', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.fillPasswordBox(testData.credentials.valid.password);
  await loginPage.clickLoginButton();
  await loginPage.verifyRequiredUsernameErrorMessage(testData.messages.required);
});

test('[TC_LOGIN_007] Login with missing password + username credentials @ui @regression @login @TC_LOGIN_007', async ({ page }) => {
  const testData = DataLoader.loadTestData();
  const pages = new PageFactory(page);

  const loginPage = pages.loginPage;
  await loginPage.navigate(`/`);
  await loginPage.clickLoginButton();
  await loginPage.verifyRequiredUsernameErrorMessage(testData.messages.required);
  await loginPage.verifyRequiredPasswordErrorMessage(testData.messages.required);
});