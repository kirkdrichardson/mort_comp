import {observable, computed, asStructure} from 'mobx';
import Mortgage from './lib/mortgage.js';

class MainStore {

  MortgageComparisonStore = observable(
    {
        // observable properties
        mort15: new Mortgage(400000, 0.03250, 15, 350.00),
        mort30: new Mortgage(400000, 0.03930, 30, 350.00),

        loanAmount: 400000,
        propertyTax: 3000,
        insurance: 1200,

        intRates: {
          mort15: 0.03250,
          mort30: 0.03930
        }
  });

  totalExpenses = () => {
    return (Number(this.state.propertyTax) + Number(this.state.insurance))
  }

  totalMonthlyExpenses = () => {
    return (this.totalExpenses() / 12.0)
  }


  // computed properties


  // actions



}

let store = new MainStore();
export default store;
