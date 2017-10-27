import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import MortgageComparisonStore from './stores/MortgageComparisonStore.js';
import LoanAmountDetailsStore from './stores/LoanAmountDetailsStore.js';

const Root = (
  <Provider
      MortgageComparisonStore={MortgageComparisonStore}
      LoanAmountDetailsStore={LoanAmountDetailsStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
