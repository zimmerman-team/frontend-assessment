import { HomePage } from "app/pages/home";
import { ExamplePage } from "app/pages/example";
import { BarChartPage } from "app/pages/barchart";
import { CirclePackingChartPage } from "app/pages/circlepacking";

export const ROUTES = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/example",
    element: <ExamplePage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/barchart",
    element: <BarChartPage />,
    errorElement: <div>404</div>,
  },
  {
    path: "/circlepackingchart",
    element: <CirclePackingChartPage />,
    errorElement: <div>404</div>,
  },
];
