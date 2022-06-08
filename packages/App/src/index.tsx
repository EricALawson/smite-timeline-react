import React from 'react';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');
if (rootElement != null) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
} else {
  console.error('Unable to find root element for React to render.');
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
