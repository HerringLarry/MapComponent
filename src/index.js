import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div style={{width: '100%', height: '400px'}}>
    <App/>
  </div>, document.getElementById('root'));
registerServiceWorker();
