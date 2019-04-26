import React from 'react';
import History from './components/History';
import CurrentCommand from './components/CurrentCommand';

class CommandLine extends React.Component {
  constructor(props) {
    super(props);
    this.addInputToConsole = this.addInputToConsole.bind(this);
    this.state = {
      console: [],
    };
  }

  addInputToConsole(value) {
    const newRow = {
      input: value,
      output: value,
    };

    this.setState(prevState => prevState.console.push(newRow));
  }

  render() {
    const styles = {
      textAlign: 'left',
      padding: '0.5rem',
    };

    const { console } = this.state;

    return (
      <div id="command-line" style={styles}>
        <History history={console} />
        <CurrentCommand handleEnter={this.addInputToConsole} />
      </div>
    );
  }
}

export default CommandLine;
