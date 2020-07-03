export function AddCourse(data, id){
  return{
    type: "CREATE_COURSE",
    data,
    id
  }
}
export function courseSuccess(data){
  return{
    type: "CREATE_COURSE_SUCCESS",
    data
  }
}
export function GetSubjects(data){
  return{
    type: "GET_SUBJECTS",
    data
  }
}
export function GetSubjectsSuccess(data){
  return{
    type: "GET_SUBJECTS_SUCCESS",
    data
  }
}
export function GetSub_Subjects(data){
  return{
    type: "GET_SUB_SUBJECTS",
    data
  }
}
export function GetSub_SubjectsSuccess(data){
  return{
    type: "GET_SUB_SUBJECTS_SUCCESS",
    data
  }
}

export function GetAdverts(data){
  return{
    type: "GET_ADVERTS",
    data
  }
}
export function ShowIdAdverts(data){  
  return{
    type: "SHOW_ID_ADVERTS",
    data
  }
}
export function GetAdvertsSuccess(data){
  return{
    type: "GET_ADVERTS_SUCCESS",
    data
  }  
}
export function ShowIdAdvertsSuccess(data){
  return{
    type: "SHOW_ID_ADVERTS_SUCCESS",
    data
  }  
}
export function DeleteAdverts(data){
  return{
    type: "DELETE_ADVERTS",
    data
  }
}
export function DeleteAdvertsSuccess(data){
  return{
    type: "DELETE_ADVERTS_SUCCESS",
    data
  }
  
}