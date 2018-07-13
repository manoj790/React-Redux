import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addItem } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

class ConnectedForm extends Component {
  constructor() {
    super();

    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addItem({ title, id });
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit = {this.handleSubmit.bind(this)}>
        <div>
          <label htmlFor = "title">Item:</label><br/>
          <input
            type = "text"
            id = "title"
            value = {title}
            required
            onChange = {this.handleChange.bind(this)}
          />
        </div><br/>
        <button type = "submit">
          ADD
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

ConnectedForm.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default Form;