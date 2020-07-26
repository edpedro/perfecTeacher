function order(state = [], action) {
  switch (action.type) {
    case 'CREATE_ORDER_SUCCESS':
      return {
        ...state,
        order: action.data
      }
    case 'GET_ORDER_SUCCESS':

      const order = action.data

      let showOrdes = []
      let showAls = []
      let showProfs = []
      
      for (var key of Object.keys(order)) {
        if (key === 'showOrder') {
          showOrdes.push(order[key][0])
        }
        if (key === 'showAl') {
          showAls.push(order[key][0])
        }
        if (key === 'showProf') {
          showProfs.push(order[key][0])
        }
     
      }     
      return {
        ...state, 
        showOrdes,
        showAls,
        showProfs      
      }
    default:
      return state
  }
}
export default order