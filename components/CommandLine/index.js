import React from 'react';

const History = () => (
  <div id="history" />
);

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
