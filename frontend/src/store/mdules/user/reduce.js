function users(state = [], action) {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.user,
        id: action.user
      }
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user
      }
      case "LOGOUT_SUCCESS":
      return {
        ...state,
        user: {}
      }
    case "AUTH_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.user,
        id: action.user.id
     }
    default:
      return state
  }
}
export default users