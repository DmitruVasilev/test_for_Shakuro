import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { operators } from "../mock-data";
import PayCaption from "./PayCaption";
import PayForm from "./PayForm";

class PayPage extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        operatorId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    redirect: false
  };

  handleRedirect = isRedirect => {
    this.setState({ redirect: isRedirect });
  };

  render() {
    const { redirect } = this.state;
    const operator = operators.filter(
      operator => operator.id === this.props.match.params.operatorId
    )[0];
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        <Link to="/">Назад</Link>
        <PayCaption icon_url={operator.icon_url} title={operator.title} />
        <PayForm handleRedirect={this.handleRedirect} />
      </React.Fragment>
    );
  }
}

export default PayPage;
