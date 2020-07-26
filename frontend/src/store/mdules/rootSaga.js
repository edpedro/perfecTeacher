import { all } from 'redux-saga/effects'

import User from './user/saga'
import Course from './course/saga'
import Order from './order/saga'

export function* rootSaga() {
  return yield all([
    User,
    Course, 
    Order,
  ])
}