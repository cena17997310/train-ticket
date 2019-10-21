import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function Nav(props) { 
  const { date, prev, next, isPrevDisabled, isNextDisaled } = props;



  return null;
}

Nav.propTypes = {
  date: PropTypes.number.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isPrevDisabled: PropTypes.bool.isRequired,
  isNextDisaled: PropTypes.bool.isRequired,
}