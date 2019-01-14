import React from "react";
import styled from "styled-components";
import { operators } from "../mock-data";
import OperatorList from "./OperatorList";

const Caption = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 1;
`;

const WelcomePage = () => (
  <React.Fragment>
    <Caption>Оплата мобильной связи</Caption>
    <OperatorList operators={operators} />
  </React.Fragment>
);

export default WelcomePage;
