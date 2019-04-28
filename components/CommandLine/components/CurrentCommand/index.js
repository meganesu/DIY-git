import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Prompt from '../Prompt';

class CurrentCommand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(event) {
    const { value } = this.state;
    const { handleEnter } = this.props;
    if (event.key === 'Enter') {
      handleEnter(value);
      this.setState({
        value: '',
      });
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { value } = this.state;
    const inputStyles = {
      fontFamily: 'Courier New, monospace',
      fontSize: '1rem',
      border: '0px',
    };
    return (
      <Fragment>
        <Prompt />
        <input
          value={value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          style={inputStyles}
        />
      </Fragment>
    );
  }
}

export default CurrentCommand;

CurrentCommand.propTypes = {
  handleEnter: PropTypes.func.isRequired,
};
