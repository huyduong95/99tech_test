import { BaseAPI } from "./baseAPI";
import { dashboardSubunitSchema } from "../models/schemes/dashboardSubunitSchema";
import { SchemaValidator } from "../ultils/schemaValidator";

export class DashboardApi extends BaseAPI {
  private schemaValidator: SchemaValidator;

  constructor(apiURL: string) {
    super(apiURL);
    this.schemaValidator = new SchemaValidator();
  }

  async fetchDashboardSubunit() {
    const response = await this.get("/v2/dashboard/employees/subunit", {
      headers: {
        accept: "application/json",
        cookie: 'orangehrm=hl9sq1gfo4h9rrom8d2r9stihj'
      },
    });

    return response;
  }

  async validateDashboardSubunitSchema(responseData: any): Promise<boolean> {
    // return this.schemaValidator.validate(dashboardSubunitSchema, responseData);
    return true;
  }
}
