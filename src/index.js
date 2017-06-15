import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom'
import { Grid, Row, Col, Container } from 'reactstrap'

ReactDOM.render(
  <Container>
    <Router>
      <App />
    </Router>
  </Container>
  , document.getElementById('root'));
registerServiceWorker();
