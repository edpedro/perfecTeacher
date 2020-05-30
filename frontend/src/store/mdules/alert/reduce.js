const INITIAL_STATE = {
  showMessage: false
}
function alert(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_USER_MESSAGE":
      return {
        ...state,
        showMessage: true,
        data: action.data
      }
    case "HIDE_USER_MESSAGE":
      return {
        ...state,
        showMessage: false,
        data: action.data
      }
      case "SHOW_PANEL_MESSAGE":
        return {
          ...state,
          showMessage: true,
          data: action.data
        }
      case "HIDE_PANEL_MESSAGE":
        return {
          ...state,
          showMessage: false,
          data: action.data
        }
    default:
      return state
  }
}
export default alert