import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

export function* signIn({ payload }) {
  try {
    const { cpf } = payload;

    const response = yield call(api.post, 'sessions', {
      cpf,
    });

    const { token, user } = response.data;

    user.formatedBalance = formatPrice(user.balance);

    // Including token in header requests
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(
      'Falha na autenticação ou servidor indisponível. Tente o CPF 12345678910'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return; // if payload is empty, meaning that user is not loggedin

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
