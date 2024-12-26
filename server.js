const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const PORT = process.env.PORT || 3000;

const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  const compiler = webpack({
    ...webpackConfig(null, { mode: 'development' }),
    mode: 'development'
  });

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(path.join(__dirname, 'build')));
}

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
