import { all } from 'redux-saga/effects'

import User from './user/saga'
import Course from './course/saga'

export function* rootSaga() {
  return yield all([
    User,
    Course   
  ])
}