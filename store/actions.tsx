import { Play } from "./reducer";

export const SET_SOUND = "SET_SOUND";
export const SET_ON = "SET_ON";
export const SET_PLAY = "SET_PLAY";
export const SET_FLASH = "SET_FLASH";
export const SET_BEST_RESULTS = "SET_BEST_RESULTS"

export const setSound = (sound:any) => (dispatch:Function) => {
  dispatch({
    type: SET_SOUND,
    payload: sound,
  });
};
export const setIsOn = (item:boolean) => (dispatch:Function) => {
  dispatch({
    type: SET_ON,
    payload: item,
  });
}
export const setPlay = (item: Play) => (dispatch:Function) => {
  dispatch({
    type: SET_PLAY,
    payload: item,
  });
}
export const setFlashColor = (item:string) => (dispatch:Function) => {
  dispatch({
    type: SET_FLASH,
    payload: item,
  });
}
export const setBestResults = (item:{Name:string,Score:number}[]) => (dispatch:Function) => {
  dispatch({
    type: SET_BEST_RESULTS,
    payload: item,
  });
}
