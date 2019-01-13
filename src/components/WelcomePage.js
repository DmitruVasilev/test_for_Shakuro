import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { operators } from "../mock-data";

const Caption = styled.h1`
  margin: 0;
  font-size: 30px;
  line-height: 1;
`;

const OperatorList = styled.ul`
  margin-top: 20px;
`;

const OperatorItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 0.5px solid #d7d7d7;
  margin-bottom: 10px;
  padding: 10px;
`;

const OperatorTitle = styled.h3`
  margin: 0 0 0 10px;
  font-weight: normal;
  font-size: 20px;
  line-height: 1;
`;

const OperatorLink = styled(Link)`
  margin-left: auto;
  padding: 5px 20px;
  text-decoration: none;
  border: 0.5px solid #3ac831;
  color: #3ac831;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover,
  &:focus {
    background: rgba(58, 200, 49, 0.15);
  }
`;

const WelcomePage = () => (
  <React.Fragment>
    <Caption>Оплата мобильной связи</Caption>
    <OperatorList>
      {operators.map(operator => (
        <OperatorItem key={operator.id}>
          <img src={operator.icon_url} alt={operator.title} />
          <OperatorTitle>{operator.title}</OperatorTitle>
          <OperatorLink to={`/pay_mobile/${operator.id}`}>
            Оплатить
          </OperatorLink>
        </OperatorItem>
      ))}
    </OperatorList>
  </React.Fragment>
);

export default WelcomePage;
