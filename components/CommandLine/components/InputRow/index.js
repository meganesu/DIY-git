import React from 'react';
import PropTypes from 'prop-types';

const InputRow = ({ content }) => (
  <div className="input-row">{content}</div>
);

export default InputRow;

InputRow.propTypes = {
  content: PropTypes.string,
};
InputRow.defaultProps = {
  content: '',
};
