import React from "react";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

const Background = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 45px);
`;

export const LoadingComp = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  position: fixed;
  background: rgba(0, 0, 0, 0.2);
`;

export const PageLoader = () => {
  return (
    <LoadingComp>
      <Container data-cy="general-loader">
        <Background>
          <CircularProgress disableShrink />
        </Background>
      </Container>
    </LoadingComp>
  );
};
