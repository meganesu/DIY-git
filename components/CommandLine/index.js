import React from 'react';
import History from './components/History';

const CurrentCommand = () => (
  <div id="current-command" />
);

const CommandLine = () => (
  <div id="command-line">
    <History />
    <CurrentCommand />
  </div>
);

export default CommandLine;
