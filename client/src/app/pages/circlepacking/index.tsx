import React from "react";
import get from "lodash/get";
import sumBy from "lodash/sumBy";
import Box from "@mui/material/Box";
import { AppBar } from "app/components/appbar";
import Typography from "@mui/material/Typography";
import { PageLoader } from "app/components/pageLoader";
import { useStoreActions, useStoreState } from "app/state/store/hooks";
import { CirclePackingChartDataItem } from "app/components/charts/circlepackingchart/data";
import { CirclePackingChart } from "app/components/charts/circlepackingchart";

export function CirclePackingChartPage() {
  const [chartData, setChartData] = React.useState<
    CirclePackingChartDataItem[]
  >([]);
  const data = useStoreState((state) => state.relatedDataApiCall.data);
  const loading = useStoreState((state) => state.relatedDataApiCall.loading);
  const fetchData = useStoreActions(
    (actions) => actions.relatedDataApiCall.fetch
  );

  React.useEffect(() => {
    fetchData({});
  }, []);

  React.useEffect(() => {
    if (!data) return;
    const cleanedData: CirclePackingChartDataItem[] = [
      { name: "head", parent: "", value: 0 },
    ];

    const iati_identifiers = [
      ...Object.keys(data).map((key) =>
        get(data[key as keyof typeof data], "iati_identifier", "")
      ),
      "head",
    ];

    Object.keys(data).forEach((key) => {
      const dataItem = data[key as keyof typeof data];
      let parent = "";
      if (get(dataItem, "related_activity.type") === "1") {
        parent = get(dataItem, "related_activity.ref", "");
      } else {
        parent = "head";
      }
      if (!parent || !iati_identifiers.includes(parent)) {
        parent = "head";
      }

      cleanedData.push({
        name: get(dataItem, "iati_identifier", ""),
        value: sumBy(get(dataItem, "transactions", []), "value"),
        parent: parent,
      });
    });

    setChartData(cleanedData);
  }, [data]);

  return (
    <Box>
      {loading && <PageLoader />}
      <AppBar />
      <Box sx={{ height: "100px" }} />
      <Typography variant="h2"> Circle Packing Chart</Typography>
      <Typography variant="subtitle1">
        This is a Circle Packing Chart from Echarts
      </Typography>
      <Box sx={{ height: "20px" }} />
      <CirclePackingChart data={chartData} />
    </Box>
  );
}
