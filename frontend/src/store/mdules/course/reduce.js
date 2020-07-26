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
        id: action.data.id,       
        update: action.data,
        showId: action.data,
        teacher: action.data.user_id
      }
        
    case "DELETE_ADVERTS_SUCCESS":
      return {
        ...state,
        adverts: action.data,
      }
    case "SEARCH_SUCCESS": 
      return{
        ...state,
        search: action.data,
       
      }  
      case "CHAVE_SUCCESS":
      return{
        ...state,
        chave: action.data,
       
      }  
    default:
      return state
  }
}
export default course