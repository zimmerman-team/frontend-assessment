export interface CirclePackingChartDataItem {
  name: string;
  value: number;
  parent: string;
}

export interface CirclePackingChartProps {
  data: CirclePackingChartDataItem[];
}

export interface CirclePackingRenderDataItem {
  data: any;
  r: any;
  x: any;
  y: any;
  depth: any;
  value: any;
  name: any;
  isLeaf: boolean;
}
