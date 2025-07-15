import { JSONSchemaType } from "ajv";

export const dashboardSubunitSchema: JSONSchemaType<{
  data: {
    subunit: {
      id: number;
      name: string;
    };
    count: number;
  }[];
  meta: {
    otherEmployeeCount: number;
    unassignedEmployeeCount: number;
    totalSubunitCount: number;
  };
  rels: any[];
}> = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          subunit: {
            type: "object",
            properties: {
              id: { type: "number" },
              name: { type: "string" },
            },
            required: ["id", "name"],
          },
          count: { type: "number" },
        },
        required: ["subunit", "count"],
      },
    },
    meta: {
      type: "object",
      properties: {
        otherEmployeeCount: { type: "number" },
        unassignedEmployeeCount: { type: "number" },
        totalSubunitCount: { type: "number" },
      },
      required: ["otherEmployeeCount", "unassignedEmployeeCount", "totalSubunitCount"],
    },
    rels: { type: "array", items: { type: "object" } },
  },
  required: ["data", "meta", "rels"],
};
