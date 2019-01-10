import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'

const MainApp = () => (
  <Router>
    <App />
  </Router>
)

ReactDOM.render(<MainApp />, document.getElementById('root'));
