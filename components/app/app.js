import React from 'react';
import CommandLine from '../command-line/command-line';

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
};

const App = () => (
  <div>
    <div style={styles.app}>
      <p>Welcome to React!</p>
    </div>
    <CommandLine />
  </div>
);

export default App;
