/* eslint-disable no-console */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const port = 3000;

const config = require('./webpack.config.js');

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(express.json());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.post('/api/v1/run-command', (req, res) => {
  const { command } = req.body;
  res.json({
    status: 'success',
    command,
  });
});

app.get('/api/v1/commit', (req, res) => {
  res.json({ command: 'commit' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
