import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ onChange, filter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
