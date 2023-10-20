import React from "react";
import Box from "@mui/material/Box";
import groupBy from "lodash/groupBy";
import isArray from "lodash/isArray";
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
    if (!data && !isArray(data)) return;
    const updatedData: TreemapDataItem[] = [];
    const groupedByReporter = groupBy(data, "reporting_org.ref");
    Object.keys(groupedByReporter).forEach((ref) => {
      updatedData.push({
        name: ref,
        value: groupedByReporter[ref].length,
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
