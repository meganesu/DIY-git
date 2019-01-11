import React from 'react';
import CommandLine from '../command-line';

const styles = {
  app: {
    padding: 40,
    textAlign: 'center',
    border: '1px solid black',
  },
};

const App = () => (
  <div>
    <div style={styles.app}>
      <CommandLine />
    </div>
  </div>
);

export default App;
