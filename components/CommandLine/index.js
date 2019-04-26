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
    this.ref = React.createRef();
  }

  componentDidUpdate() {
    const element = this.ref.current;
    element.scrollTop = element.scrollHeight;
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
      boxSizing: 'border-box',
      textAlign: 'left',
      padding: '0.5rem',
      height: '100%',
      overflow: 'scroll',
    };

    const { console } = this.state;

    return (
      <div id="command-line" style={styles} ref={this.ref}>
        <History history={console} />
        <CurrentCommand handleEnter={this.addInputToConsole} />
      </div>
    );
  }
}

export default CommandLine;
