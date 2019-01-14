import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Caption = styled.h1`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const OperatorTitle = styled.span`
  margin: 0;
  font-weight: normal;
  font-size: 30px;
  line-height: 1;
`;

const PayCaption = ({ icon_url, title }) => (
  <Caption>
    <img src={icon_url} alt={title} />
    <OperatorTitle>{title}</OperatorTitle>
  </Caption>
);

PayCaption.propTypes = {
  icon_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PayCaption;
