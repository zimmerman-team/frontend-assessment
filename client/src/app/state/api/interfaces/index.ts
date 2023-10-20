import { Action, Thunk } from "easy-peasy";

export interface RequestValues<T> {
  values?: T;
}

export interface ResponseData<T> {}

export interface Errors {
  result: object | null;
  status: number | null;
  statusText: string | null;
}

export interface ApiModel<QueryModel, ResponseModel> {
  loading: boolean;
  success: boolean;
  data: ResponseData<ResponseModel>[];
  setData: Action<ApiModel<QueryModel, ResponseModel>, any>;
  errorData: Errors | null;
  onError: Action<ApiModel<QueryModel, ResponseModel>, Errors>;
  setSuccess: Action<ApiModel<QueryModel, ResponseModel>>;
  onSuccess: Action<
    ApiModel<QueryModel, ResponseModel>,
    ResponseData<ResponseModel> | ResponseData<ResponseModel>[]
  >;
  onRequest: Action<ApiModel<QueryModel, ResponseModel>>;
  fetch: Thunk<ApiModel<QueryModel, ResponseModel>, RequestValues<QueryModel>>;
  clear: Action<ApiModel<QueryModel, ResponseModel>>;
}

export interface ApiCallParams {
  q?: string;
}

export interface ApiResponseModel {
  iati_identifier: string;
  hierarchy: number;
  default_currency: string;
  reporting_org: {
    ref: string;
    narrative: string;
    type: string;
  };
  title: string;
  description: string;
  participating_orgs: {
    type: string;
    ref: string;
    narrative: string;
    role: string;
  }[];
  activity_date: {
    iso_date: string;
    ref: string;
  }[];
}

export type ApiCallModel = ApiModel<
  ApiCallParams | ApiCallParams[] | string,
  ApiResponseModel
>;

export interface StoreModel {
  exampleChartApiCall: ApiCallModel;
}
