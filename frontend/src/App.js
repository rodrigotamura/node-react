import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import history from '~/services/history';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';
import Routes from './routes';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer
            autoClose={3000}
            position={toast.POSITION.BOTTOM_CENTER}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
