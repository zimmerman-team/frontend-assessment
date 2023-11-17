import React from "react";
import Box from "@mui/material/Box";
import * as echarts from "echarts/core";
import { TooltipComponent, VisualMapComponent } from "echarts/components";
import { CustomChart } from "echarts/charts";

import { SVGRenderer } from "echarts/renderers";
import { drillDown } from "./utils";
import { CirclePackingChartProps } from "./data";

echarts.use([TooltipComponent, CustomChart, SVGRenderer, VisualMapComponent]);

export function CirclePackingChart(props: CirclePackingChartProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current && props.data.length > 1) {
      const chart = echarts.init(containerRef.current, undefined, {
        renderer: "svg",
      });

      drillDown(props.data, null, containerRef.current.clientWidth, 500, chart);

      chart.on("click", { seriesIndex: 0 }, (params: any) => {
        if (containerRef.current) {
          drillDown(
            props.data,
            params.data.name,
            containerRef.current.clientWidth,
            500,
            chart
          );
        }
      });

      // Reset: click on the blank area.
      chart.getZr().on("click", function (event) {
        if (!event.target && containerRef.current) {
          drillDown(
            props.data,
            null,
            containerRef.current.clientWidth,
            500,
            chart
          );
        }
      });
    }
  }, [containerRef.current, props.data]);

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        height: "500px",
      }}
    />
  );
}
