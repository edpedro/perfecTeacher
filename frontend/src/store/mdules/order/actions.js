export function AddOrder(data) {
  return {
    type: 'ADD_ORDER',
    data
  }
}
export function CreateOrderSuccess(data) {
  return {
    type: 'CREATE_ORDER_SUCCESS',
    data
  }
}
export function getOrder(id){
  return {
    type: 'GET_ORDER',
    id 
  }
}
export function getOrderSuccess(data){
  return {
    type: 'GET_ORDER_SUCCESS',
    data
  }
}
export function deleteOrder(id){
  return {
    type: 'DELETE_ORDER',
    id 
  }
}