import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import {
  Switch,
  Route,
  Link,
  Routes,
  Router,
  BrowserRouter
  
} from "react-router-dom";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'; 
import { saga as citiesSaga } from './Modules/Dictionary/Cities';
import { saga as manufacturersSaga } from './Modules/Dictionary/Manufacturers';

import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import allReducers from './Modules/allReducers';
import App from './Components/Root/App';

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleWare),
  // other store enhancers if any
));

sagaMiddleWare.run(citiesSaga.watchCities);
sagaMiddleWare.run(manufacturersSaga.watchCities);
// sagaMiddleWare.run(currentweatherSaga.watchCurrentWeather);
// sagaMiddleWare.run(dailyWeatherSaga.watchDailyWeather);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
