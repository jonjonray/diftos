import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app.jsx';
// var htmlDiff = require('./util/comparison')
// var scraper = require('./util/scraper')


document.addEventListener('DOMContentLoaded', () => {


  const root = document.getElementById('root');
  ReactDOM.render(<App/>, root);
});
