import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './../../../common/store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './';

describe('Containers', () => {
  describe('App', () => {
    test('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    test('router should wrapp the App component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
