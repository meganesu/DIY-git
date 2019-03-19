import React from 'react';
import CommandLine from '../CommandLine';

const styles = {
  app: {
    padding: 40,
    textAlign: 'center',
    border: '1px solid black',
  },
};

const App = () => (
  <div style={styles.app}>
    <CommandLine />
  </div>
);

export default App;
