import { all } from 'redux-saga/effects'

import Register from './user/saga'
import Login from './user/saga'
import GetSubject from './course/saga'


export default function* rootSaga() {
  return yield all([
    Register,
    Login,
    GetSubject,
  ])
}