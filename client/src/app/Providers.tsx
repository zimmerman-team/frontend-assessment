import React from "react";
import theme from "app/theme";
import { store } from "app/state/store";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { PageLoader } from "app/components/pageLoader";
import { StoreProvider, useStoreRehydrated } from "easy-peasy";

interface ProviderProps {
  children?: any;
}

function Providers(props: ProviderProps) {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>{props.children}</AppContainer>
      </ThemeProvider>
    </StoreProvider>
  );
}

export default Providers;

function AppContainer(props: ProviderProps) {
  const isRehydrated = useStoreRehydrated();
  if (!isRehydrated) {
    return <PageLoader />;
  }
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        "@media (max-width: 1280px)": {
          padding: "0 24px",
        },
      }}
    >
      {props.children}
    </Container>
  );
}
