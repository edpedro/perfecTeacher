export const isAuthenticated = () =>{
  if(localStorage.length > 0){
    return true
  }else{
    return false
  }
}