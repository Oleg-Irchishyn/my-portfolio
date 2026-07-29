import React from 'react';
import ReactDOM from 'react-dom';
import { it } from 'vitest';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
//@ts-ignore
import { IntlProvider } from 'react-redux-multilingual';
import { translations } from './translations/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <IntlProvider translations={translations} locale="en">
          <App />
        </IntlProvider>
      </Provider>
    </BrowserRouter>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
