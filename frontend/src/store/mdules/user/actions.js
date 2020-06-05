function RegisterUser(user){
  return {
    type: "REGISTER",
    user
  }
}
function LoginUser(user){
  return{
    type: "LOGIN",
    user
  }
}
function LogoutUser(){
  return{
    type: "LOGOUT",
  }
}
function LogoutUserSuccess(){
  return{
    type: "LOGOUT_SUCCESS",
  }
}
function RegisterSuccess(user){
  return {
    type: "REGISTER_SUCCESS",
    user
  }
}
function LoginSuccess(user){
  return{
    type: "LOGIN_SUCCESS",
    user
  }
}
function AuthLogin(user){
  return {
    type: "AUTH_LOGIN",
    user
  }
}
function AuthLoginSuccess(user){
  return{
    type: "AUTH_LOGIN_SUCCESS",
    user
  }
}
function Upload(data, id){
  return{
    type: "UPLOAD",
    data,
    id

  }
}
function UploadSuccess(data){
  return{
    type: "UPLOAD_SUCCESS",
    data
  }
}
export {
  RegisterSuccess, 
  LoginSuccess, 
  RegisterUser, 
  LoginUser, 
  LogoutUser,
  AuthLogin,
  AuthLoginSuccess,
  LogoutUserSuccess,
  Upload,
  UploadSuccess
}
