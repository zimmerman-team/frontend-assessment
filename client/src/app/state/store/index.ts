// base
import { createStore } from "easy-peasy";
import { StoreModel } from "app/state/api/interfaces";
import { exampleChartApiCall } from "app/state/api/action-reducers/exampleChartApiCall";

const storeContent: StoreModel = {
  exampleChartApiCall,
};

export const store = createStore(storeContent);
