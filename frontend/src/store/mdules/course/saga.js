import { call, put, all, takeLatest } from 'redux-saga/effects'
import {
  GetSubjectsSuccess,
  GetSub_SubjectsSuccess,
  courseSuccess,
  GetAdvertsSuccess,
  DeleteAdvertsSuccess,
  UpdateAdvertsSuccess
} from '../course/actions'

import { alertShowPanelMessage } from '../alert/actions'


import api from '../../../services/api'
import history from '../../../services/history'

const token = localStorage.getItem('token')

function* createCourse({ data, id }) {

  try {
    const method = id ? api.put : api.post
    const url = id
      ? `curso/${data.id}`
      : `curso`

    const response = yield call(method, url, data, {
      headers: {
        'x-access-token': token
      }
    })
    yield put(courseSuccess(response.data))

    const text = id
      ? 'Curso alterado com sucesso!!'
      : 'Curso cadastrado com sucesso!!'

    yield put(alertShowPanelMessage({
      severity: 'success',
      message: text
    }))
    history.push("/painel")
  } catch (error) {
    alert(error)
  }
}

function* GetSubject() {

  try {
    const response = yield call(api.get, 'admin/materia', {
      headers: {
        'x-access-token': token
      }
    })

    yield put(GetSubjectsSuccess(response.data))

  } catch (error) {
    alert(error)
  }
}
function* GetSub_Subject() {

  try {
    const response = yield call(api.get, 'admin/submateria', {
      headers: {
        'x-access-token': token
      }
    })

    yield put(GetSub_SubjectsSuccess(response.data))

  } catch (error) {
    alert(error)
  }
}
function* GetAdvertisement({ data }) {
  const token = localStorage.getItem('token')

  try {
    const response = yield call(api.get, `curso/${data}`, {
      headers: {
        'x-access-token': token
      }
    })

    yield put(GetAdvertsSuccess(response.data))

  } catch (error) {
    alert(error)
  }
}
function* UpdateAdvertisement({ data }) {
  console.log(data)
  const token = localStorage.getItem('token')
  try {
    const response = yield call(api.get, `curso/show/${data}`, {
      headers: {
        'x-access-token': token
      }
    })
    yield put(UpdateAdvertsSuccess(response.data[0]))

  } catch (error) {
    alert(error)
  }
}
function* DeleteAdvertisement({ data }) {
 
  const token = localStorage.getItem('token')
  try {
    yield call(api.delete, `curso/${data}`, {
      headers: {
        'x-access-token': token
      }
    })

    yield put(DeleteAdvertsSuccess())
    history.push("/painel")
    yield put(alertShowPanelMessage({
      severity: 'success',
      message: 'Deletado com sucesso!!'
    }))

  } catch (error) {
    alert(error)
  }
}
export default all([
  takeLatest('GET_SUBJECTS', GetSubject),
  takeLatest('GET_SUB_SUBJECTS', GetSub_Subject),
  takeLatest('CREATE_COURSE', createCourse),
  takeLatest('GET_ADVERTS', GetAdvertisement),
  takeLatest('DELETE_ADVERTS', DeleteAdvertisement),
  takeLatest('UPDATE_ADVERTS', UpdateAdvertisement),
])