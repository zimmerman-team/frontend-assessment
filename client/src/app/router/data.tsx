import { HomePage } from "app/pages/home";
import { ExamplePage } from "app/pages/example";

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
];
