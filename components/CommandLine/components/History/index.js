import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InputRow from '../InputRow';
import OutputRow from '../OutputRow';

const History = ({ history }) => (
  <Fragment>
    {
      history.map(({ input, output }) => (
        <Fragment>
          <InputRow content={input} />
          <OutputRow content={output} />
        </Fragment>
      ))
    }
  </Fragment>
);

export default History;

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    input: PropTypes.string,
    output: PropTypes.string,
  })),
};
History.defaultProps = {
  history: [],
};
