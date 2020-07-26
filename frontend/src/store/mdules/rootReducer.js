import {combineReducers} from 'redux'

import users from './user/reduce'
import alert from './alert/reduce'
import course from './course/reduce'
import order from './order/reduce'

export default combineReducers({
  users,
  alert,
  course,
  order,
})