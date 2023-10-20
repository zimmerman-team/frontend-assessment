import { APIModel } from "app/state/api";
import { ApiCallModel } from "app/state/api/interfaces";

export const exampleChartApiCall: ApiCallModel = {
  ...APIModel("http://localhost:4200/api/data"),
};
