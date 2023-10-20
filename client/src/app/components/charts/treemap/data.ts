export interface TreemapDataItem {
  name: string;
  value: number;
  itemStyle?: object;
  children?: TreemapDataItem[];
}

export interface TreemapChartProps {
  data: TreemapDataItem[];
}
