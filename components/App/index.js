import React from 'react';
import CommandLine from '../CommandLine';

const styles = {
  app: {
    boxSizing: 'border-box',
    textAlign: 'center',
    border: '1px solid black',
    height: '100vh',
  },
};

const App = () => (
  <div style={styles.app}>
    <CommandLine />
  </div>
);

export default App;
