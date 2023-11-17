import React from "react";
import get from "lodash/get";
import sumBy from "lodash/sumBy";
import Box from "@mui/material/Box";
import groupBy from "lodash/groupBy";
import { AppBar } from "app/components/appbar";
import Typography from "@mui/material/Typography";
import { PageLoader } from "app/components/pageLoader";
import { useStoreActions, useStoreState } from "app/state/store/hooks";
import { BarChartDataItem } from "app/components/charts/barchart/data";
import { BarChart } from "app/components/charts/barchart";

export function BarChartPage() {
  const [chartData, setChartData] = React.useState<BarChartDataItem[]>([]);

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
    const updatedData: BarChartDataItem[] = [];
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
      <Typography variant="h2"> Bar Chart</Typography>
      <Typography variant="subtitle1">
        This is a Bar Chart from Echarts
      </Typography>
      <Box sx={{ height: "20px" }} />
      <BarChart data={chartData} />
    </Box>
  );
}
