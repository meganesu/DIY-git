import React from 'react';
import PropTypes from 'prop-types';

const OutputRow = ({ content }) => (
  <div className="output-row">{content}</div>
);

export default OutputRow;

OutputRow.propTypes = {
  content: PropTypes.string.isRequired,
};
