import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
};

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.app}>
          Welcome to React!
        </div>
      </div>
    );
  }
}

const root = document.querySelector('#app');
ReactDOM.render(<App />, root);
