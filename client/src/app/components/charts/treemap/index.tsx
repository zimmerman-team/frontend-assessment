import React from "react";
import find from "lodash/find";
import Box from "@mui/material/Box";
import * as echarts from "echarts/core";
import ReactDOMServer from "react-dom/server";
import { TreemapSeriesOption } from "echarts";
import { SVGRenderer } from "echarts/renderers";
import { TreemapChart as EchartsTreemap } from "echarts/charts";
import { TooltipComponent, TooltipComponentOption } from "echarts/components";
import {
  TreemapChartProps,
  TreemapDataItem,
} from "app/components/charts/treemap/data";

echarts.use([TooltipComponent, EchartsTreemap, SVGRenderer]);

export function TreemapChart(props: TreemapChartProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const chart = echarts.init(containerRef.current, undefined, {
        renderer: "svg",
      });

      const option: echarts.ComposeOption<TreemapSeriesOption> = {
        series: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          leafDepth: 1,
          type: "treemap",
          data: props.data,
          drillDownIcon: "",
          label: {
            offset: [8, 8],
            fontSize: "14px",
            fontFamily: "Roboto",
            position: "insideTopLeft",
            color: "#000",
            lineHeight: 20,
          },
          itemStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: "#fff",
          },
        },
      };

      chart.setOption(option);
    }
  }, [containerRef.current]);

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
