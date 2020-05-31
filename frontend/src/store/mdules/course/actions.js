export function AddCourse(data, id){
  return{
    type: "CREATE_COURSE",
    data
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
export function GetAdvertsSuccess(data){
  return{
    type: "GET_ADVERTS_SUCCESS",
    data
  }
}