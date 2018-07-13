import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return { items: state.items }
}

const ConnectedList = ({ items }) => (
  <ol>
    {items.map(element => (
      <li key = {element.id}>
        {element.title}
      </li>
    ))}
  </ol>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;