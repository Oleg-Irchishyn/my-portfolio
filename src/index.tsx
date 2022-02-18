import store from './redux/store';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import reportWebVitals from './reportWebVitals';
//@ts-ignore
import {IntlProvider } from 'react-redux-multilingual'
import {translations} from './translations/'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
      <IntlProvider translations={translations} locale='en'>
        <App />
        </IntlProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);

reportWebVitals();
