/* eslint-disable no-param-reassign */
import { action, thunk } from "easy-peasy";
import axios, { AxiosResponse } from "axios";
import {
  ApiModel,
  Errors,
  RequestValues,
  ResponseData,
} from "app/state/api/interfaces";

export const APIModel = <QueryModel, ResponseModel>(
  url: string
): ApiModel<QueryModel, ResponseModel> => ({
  loading: false,
  success: false,
  data: [],
  errorData: null,
  onError: action((state, payload: Errors) => {
    state.loading = false;
    state.errorData = payload;
  }),
  onSuccess: action((state, payload: ResponseData<ResponseModel>[]) => {
    state.loading = false;
    state.success = true;
    state.data = payload;
  }),
  setSuccess: action((state) => {
    state.loading = false;
    state.success = true;
  }),
  onRequest: action((state) => {
    state.loading = true;
    state.success = false;
  }),
  fetch: thunk(async (actions, query: RequestValues<QueryModel>) => {
    actions.onRequest();
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (resp: AxiosResponse) => actions.onSuccess({ ...resp.data }),
        (error: any) => actions.onError(error.response)
      );
  }),
  setData: action((state, payload: any) => {
    state.data = payload;
  }),
  clear: action((state) => {
    state.loading = false;
    state.success = false;
    state.data = [];
    state.errorData = null;
  }),
});
