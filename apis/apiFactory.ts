import { Page } from "playwright";
import { DashboardApi } from "./dashboardApi";
import { config } from "../config";


export class APIFactory {
  private readonly apiURL: string = config.apiURL;

  constructor() {
  }

  public get getDashboardApi(): DashboardApi {
    return new DashboardApi(this.apiURL);
  }

}
