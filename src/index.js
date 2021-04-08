import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTable from './Component/ShowTable';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './Reducer/index';
import thunk from 'redux-thunk';


export const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <ShowTable />
  </Provider>,
  document.getElementById('root')
);

