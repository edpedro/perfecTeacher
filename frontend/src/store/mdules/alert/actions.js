export function alertShowUserMessage(data){
  return{
    type: "SHOW_USER_MESSAGE",
    data
  }
}
export function alertHideUserMessage(data){
  return{
    type: "HIDE_USER_MESSAGE",
    data
  }
}
export function alertShowPanelMessage(data){
  return{
    type: "SHOW_PANEL_MESSAGE",
    data
  }
}
export function alertHidePanelMessage(data){
  return{
    type: "HIDE_PANEL_MESSAGE",
    data
  }
}