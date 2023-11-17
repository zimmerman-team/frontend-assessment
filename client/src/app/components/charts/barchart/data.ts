export interface BarChartDataItem {
  name: string;
  value: number;
  itemStyle?: object;
  children?: BarChartDataItem[];
}

export interface BarChartProps {
  data: BarChartDataItem[];
}
