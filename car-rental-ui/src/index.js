import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals'; 
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';  

import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import allReducers from './Modules/allReducers'; 
import rootSaga from './Modules/rootSaga';
import CarRentalRoutes from './Routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(allReducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleWare),
  // other store enhancers if any
));

sagaMiddleWare.run(rootSaga); 
// sagaMiddleWare.run(currentweatherSaga.watchCurrentWeather);
// sagaMiddleWare.run(dailyWeatherSaga.watchDailyWeather);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <CarRentalRoutes />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
