import React from "react";
import { Link } from "react-router-dom";
// import {operators} from "../mock-data";

class PayPage extends React.Component {
  state = {
    test: "PayPage"
  };

  render() {
    // console.log('---', this.props)
    return (
      <div>
        {this.state.test}
        <Link to="/">PayPage</Link>
        {/*{operators.filter(operator=>operator.id===this.props.match.params.operatorId).map(operator=>{*/}
        {/*return(*/}
        {/*<div>{operator.title}</div>*/}
        {/*)*/}
        {/*})}*/}
      </div>
    );
  }
}

export default PayPage;
