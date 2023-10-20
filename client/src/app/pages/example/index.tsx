import React from "react";
import get from "lodash/get";
import sumBy from "lodash/sumBy";
import Box from "@mui/material/Box";
import groupBy from "lodash/groupBy";
import { AppBar } from "app/components/appbar";
import { PageLoader } from "app/components/pageLoader";
import { TreemapChart } from "app/components/charts/treemap";
import { TreemapDataItem } from "app/components/charts/treemap/data";
import { useStoreActions, useStoreState } from "app/state/store/hooks";

export function ExamplePage() {
  const [chartData, setChartData] = React.useState<TreemapDataItem[]>([]);

  const data = useStoreState((state) => state.exampleChartApiCall.data);
  const loading = useStoreState((state) => state.exampleChartApiCall.loading);
  const fetchData = useStoreActions(
    (actions) => actions.exampleChartApiCall.fetch
  );

  React.useEffect(() => {
    fetchData({});
  }, []);

  React.useEffect(() => {
    if (!data) return;
    const updatedData: TreemapDataItem[] = [];
    const groupedBy = groupBy(data, "reporting_org.ref");
    Object.keys(groupedBy).forEach((key) => {
      updatedData.push({
        name: key,
        value: sumBy(groupedBy[key], (item) =>
          sumBy(get(item, "transactions", []), "value")
        ),
      });
    });
    setChartData(updatedData);
  }, [data]);

  return (
    <Box>
      <AppBar />
      <Box sx={{ height: "150px" }} />
      {loading && <PageLoader />}
      <TreemapChart data={chartData} />
    </Box>
  );
}
