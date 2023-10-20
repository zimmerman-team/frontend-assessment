import React from "react";
import Box from "@mui/material/Box";
import { AppBar } from "app/components/appbar";

export function HomePage() {
  return (
    <Box>
      <AppBar />
      <Box sx={{ height: "100px" }} />
      Hello
    </Box>
  );
}
