import { Component } from 'react';

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

export default App;
