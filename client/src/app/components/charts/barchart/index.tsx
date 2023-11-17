import React from "react";
import Box from "@mui/material/Box";
import * as echarts from "echarts/core";
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
} from "echarts/components";
import { BarChart as EchartsBarChart } from "echarts/charts";
import { BarSeriesOption } from "echarts";

import { SVGRenderer } from "echarts/renderers";
import { BarChartProps } from "app/components/charts/barchart/data";

echarts.use([TooltipComponent, EchartsBarChart, SVGRenderer, GridComponent]);

export function BarChart(props: BarChartProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (containerRef.current) {
      const chart = echarts.init(containerRef.current, undefined, {
        renderer: "svg",
      });

      const option: echarts.ComposeOption<
        BarSeriesOption | TooltipComponentOption
      > = {
        xAxis: {
          type: "category",
          data: props.data.map((item) => item.name),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: props.data.map((item) => item.value),
            type: "bar",
          },
        ],
        tooltip: {
          showContent: true,
        },
      };

      chart.setOption(option);
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
