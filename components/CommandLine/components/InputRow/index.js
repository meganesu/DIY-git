import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Prompt from '../Prompt';

const InputRow = ({ content }) => (
  <Fragment>
    <Prompt />
    <span className="input-row">{content}</span>
  </Fragment>
);

export default InputRow;

InputRow.propTypes = {
  content: PropTypes.string,
};
InputRow.defaultProps = {
  content: '',
};
