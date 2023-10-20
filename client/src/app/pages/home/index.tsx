import React from "react";
import Box from "@mui/material/Box";
import { AppBar } from "app/components/appbar";
import Typography from "@mui/material/Typography";

export function HomePage() {
  return (
    <Box>
      <AppBar />
      <Box sx={{ height: "100px" }} />
      <Typography variant="h2">Hello 👋</Typography>
      <Typography variant="subtitle1">
        You have been given a boilerplate React application to work with. Your
        task is to complete the following steps:
      </Typography>
      <ul>
        <li>Fork and clone the repository</li>
        <li>Install the required packages</li>
        <li>
          Make an API call using the provided endpoint in the middleware (check
          server folder) or create one yourself using iati.cloud
        </li>
        <li>
          Make use of the Easy-Peasy state manager in managing and controlling
          your API call(s)
        </li>
        <li>
          Create any of the following charts using the Echart library (which is
          already installed)
        </li>
        <ul>
          <li>Sankey chart</li>
          <li>Line chart</li>
          <li>Bar chart</li>
        </ul>
        <li>
          Ensure that the components in your application are responsive to
          different screen sizes
        </li>
      </ul>
    </Box>
  );
}
