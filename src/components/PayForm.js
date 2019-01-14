import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputMask from "react-input-mask";

const Form = styled.form`
  margin: 0;
`;

const Input = styled.input`
  margin-top: 10px;
`;

const InputPhone = styled(InputMask)`
  margin-top: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: normal;
  font-size: 25px;
  line-height: 1;
`;

const ErrorMessage = styled.span`
  display: block;
  margin: ${props => props.pushTop || "0 0 10px"};
  color: ${props => props.statusColor || "red"};
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`;

const Valute = styled.span`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20px;
  line-height: 1;
`;

const Submit = styled.button`
  padding: 5px 20px;
  text-decoration: none;
  border: 0.5px solid #3ac831;
  color: #3ac831;
  border-radius: 5px;
  background: white;
  transition: 0.5s ease;
  cursor: pointer;
  outline: none;
  &:disabled {
    cursor: default;
    background: rgba(206, 206, 206, 0.3);
    border-color: rgba(206, 206, 206, 0.6);
    &:hover,
    &:focus {
      background: rgba(206, 206, 206, 0.3);
    }
  }
  &:hover,
  &:focus {
    background: rgba(58, 200, 49, 0.15);
  }
`;

class PayForm extends React.Component {
  static propTypes = {
    handleRedirect: PropTypes.func.isRequired
  };

  state = {
    phone_value: "",
    range_value_error: "",
    phone_value_error: "",
    statusMessage: "",
    submitSuccess: "",
    range_value: ""
  };

  onPhoneValueChange = e => {
    this.setState({
      phone_value: e.target.value
        .split("_")
        .join("")
        .replace(/\s/g, "")
    });
  };

  onRangeValueChange = e => {
    if (e.target.value >= 1000) {
      this.setState({
        range_value: 1000
      });
    } else {
      this.setState({
        range_value: e.target.value
      });
    }
  };

  submitSuccess = () => {
    const randomNumber = Math.random() * 100;
    if (randomNumber < 50) {
      this.setState({
        submitSuccess: true,
        statusMessage:
          "Операция выполнена успешно, вы будете перенаправлены на главную странницу"
      });
      setTimeout(() => this.props.handleRedirect(true), 5000);
    } else {
      this.setState({
        submitSuccess: false,
        statusMessage: "Произошла ошибка, попробуйте позже"
      });
    }
  };

  onHandleSubmit = e => {
    e.preventDefault();

    if (!this.state.range_value) {
      this.setState({
        range_value_error: "Введите сумму"
      });
    } else {
      this.setState({
        range_value_error: ""
      });
    }

    if (this.state.phone_value.length !== 12) {
      this.setState({
        phone_value_error: "Введите номер телефона"
      });
    } else {
      this.setState({
        phone_value_error: ""
      });
    }

    this.state.range_value &&
      this.state.phone_value.length === 12 &&
      this.submitSuccess();
  };

  render() {
    const {
      phone_value,
      range_value,
      range_value_error,
      phone_value_error,
      submitSuccess,
      statusMessage
    } = this.state;

    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label htmlFor="phone">
          Введите номер телефона:
          <br />
          <InputPhone
            id="phone"
            type="phone"
            mask="+7\ 999 999 99 99"
            value={phone_value}
            onChange={this.onPhoneValueChange}
          />
        </Label>
        <ErrorMessage>{phone_value_error}</ErrorMessage>
        <Label htmlFor="number">
          Введите сумму:
          <br />
          <Input
            id="number"
            type="number"
            value={range_value}
            onChange={this.onRangeValueChange}
          />
          <Valute>₽</Valute>
        </Label>
        <ErrorMessage>{range_value_error}</ErrorMessage>
        <Submit type="submit" disabled={submitSuccess}>
          Оплатить
        </Submit>
        {statusMessage && (
          <ErrorMessage
            pushTop="10px 0 0"
            statusColor={submitSuccess && "green"}
          >
            {statusMessage}
          </ErrorMessage>
        )}
      </Form>
    );
  }
}

export default PayForm;
