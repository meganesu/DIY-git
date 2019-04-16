import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <Fragment>
        <input
          value={value}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

export default CurrentCommand;

CurrentCommand.propTypes = {
  handleEnter: PropTypes.func.isRequired,
};
