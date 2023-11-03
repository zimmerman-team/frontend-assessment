import React from "react";
import get from "lodash/get";
import sumBy from "lodash/sumBy";
import Box from "@mui/material/Box";
import groupBy from "lodash/groupBy";
import { AppBar } from "app/components/appbar";
import Typography from "@mui/material/Typography";
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
      {loading && <PageLoader />}
      <AppBar />
      <Box sx={{ height: "100px" }} />
      <Typography variant="h2">Example with Treemap</Typography>
      <Typography variant="subtitle1">
        This is an example using the Treemap chart from the Echarts library to
        display data from the locally run API.
      </Typography>
      <Box sx={{ height: "20px" }} />
      <TreemapChart data={chartData} />
    </Box>
  );
}
