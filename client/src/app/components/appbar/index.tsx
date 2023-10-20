import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as RouteLink } from "react-router-dom";

export function AppBar() {
  return (
    <MuiAppBar position="fixed">
      <Container maxWidth="lg" disableGutters>
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
              }}
            >
              Zimmerman's Frontend Assesment
            </Typography>
            <Box
              sx={{
                gap: "25px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Link
                to="/"
                component={RouteLink}
                sx={{
                  color: "#fff",
                }}
              >
                Home
              </Link>
              <Link
                to="/example"
                component={RouteLink}
                sx={{
                  color: "#fff",
                }}
              >
                Example
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
