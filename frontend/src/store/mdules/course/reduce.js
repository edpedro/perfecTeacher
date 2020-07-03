function course(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return {
        ...state,
        course: action.data
      }
    case "GET_SUBJECTS_SUCCESS":
      return {
        ...state,
        subject: action.data
      }
    case "GET_SUB_SUBJECTS_SUCCESS":
      return {
        ...state,
        sub_subject: action.data
      }
    case "GET_ADVERTS_SUCCESS":
      return {
        ...state,
        adverts: action.data,
        quant: action.data.length
      }
    case "SHOW_ID_ADVERTS_SUCCESS": 
      if(action.data === undefined){
        return {}
      }
      return {
        ...state,
        update: action.data,
        showId: action.data
      }
        
    case "DELETE_ADVERTS_SUCCESS":
      return {
        ...state,
        adverts: action.data,
      }
    default:
      return state
  }
}
export default course