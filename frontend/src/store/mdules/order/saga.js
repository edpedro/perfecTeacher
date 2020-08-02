import { call, put, all, takeLatest } from 'redux-saga/effects'
import { CreateOrderSuccess, getOrderSuccess } from './actions'

import { alertShowPanelMessage } from '../alert/actions'


import api from '../../../services/api'
import history from '../../../services/history'

function* orderCreate({ data }) {
  const token = localStorage.getItem('token')
  try {
    const response = yield call(api.post, 'order', data, {
      headers: {
        'x-access-token': token
      }
    })

    yield put(CreateOrderSuccess(response.data))

    yield put(alertShowPanelMessage({
      severity: 'success',
      message: 'pedido feito com sucesso!'
    }))
    history.push("/painel")
  } catch (error) {
    alert(error)
  }
}
function* GetOrder({id, user}){
  const token = localStorage.getItem('token')
  try {
    const response = yield call(api.get, `order/${id}`, {
      headers: {
        'x-access-token': token
      },
      params: {
        user
      }
    })

    yield put(getOrderSuccess(response.data))
  
  } catch (error) {
    alert(error)
  }
} 
function* DeleteOrder({id}){
  const token = localStorage.getItem('token')
  try {
    const res = yield call(api.delete, `order/${id}`, {
      headers: {
        'x-access-token': token
      }
    })
    if(!res){
      yield put(alertShowPanelMessage({
        severity: 'danger',
        message: 'Erro ao deletar!!'
      }))
      return
    }
    yield put(alertShowPanelMessage({
      severity: 'success',
      message: 'Deletado com sucesso!!'
    }))
    history.push("/painel")
  } catch (error) {
    alert(error)
  }
} 

export default all([
  takeLatest('ADD_ORDER', orderCreate),
  takeLatest('GET_ORDER', GetOrder),
  takeLatest('DELETE_ORDER', DeleteOrder)
])