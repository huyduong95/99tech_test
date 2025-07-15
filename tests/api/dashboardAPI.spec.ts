import { test, expect } from '@playwright/test';
import { APIFactory } from '../../apis/apiFactory';

test.skip("[] Validate Dashboard Subunit API Response @api", async () => {
  const apiFactory = new APIFactory();
  const dashboardApi = apiFactory.getDashboardApi;

  const response = await dashboardApi.fetchDashboardSubunit();
  expect(response.status).toBe(200);
});
