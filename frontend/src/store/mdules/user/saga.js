import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'
import { LoginSuccess, AuthLoginSuccess, RegisterSuccess, LogoutUserSuccess } from './actions'
import { alertShowUserMessage, alertShowPanelMessage } from '../alert/actions'

import api from '../../../services/api'
import history from '../../../services/history'

const token = localStorage.getItem('token')

function* Register({ user }) {

  try {

    const response = yield call(() => api.post('user', user));

    localStorage.setItem('token', response.data.token)

    yield put(RegisterSuccess(response.data.id))
    yield put(alertShowPanelMessage({
      severity: 'success',
      message: 'Cadastrado com sucesso!!'
    }))

    const type = response.data.type

    if (type === 'p') {
      history.push("/course")
    } else {
      history.push("/painel")
    }

  } catch (error) {
    yield put(alertShowUserMessage({
      severity: 'error',
      message: 'Email já exister'
    }))
  }
}
function* Login({ user }) {
  try {
    const response = yield call(api.post, 'login', user)

    localStorage.setItem('token', response.data.token)

    yield put(LoginSuccess(response.data.user))
    yield put(alertShowPanelMessage({
      severity: 'success',
      message: 'Logado com sucesso!!'
    }))

    history.push("/painel")

  } catch (error) {
    yield put(alertShowUserMessage({
      severity: 'error',
      message: 'Email e Senha invalida!'
    }))
  }
}
function* AuthLogin({ user }) {

  try {
    const response = yield call(api.post, 'authlogin', user, {
      headers: {
        'x-access-token': token
      }
    });

    yield put(AuthLoginSuccess(response.data))

  } catch (error) {
    history.push("/")
  }
}
function* Logout() {

  yield localStorage.removeItem('token')
  yield put(LogoutUserSuccess())

  history.push("/")
}
export default all([
  takeLatest('REGISTER', Register),
  takeLatest('LOGIN', Login),
  takeEvery('AUTH_LOGIN', AuthLogin),
  takeEvery('LOGOUT', Logout)
])