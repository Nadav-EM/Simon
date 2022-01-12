import {
  SET_BEST_RESULTS,
  SET_FLASH,
  SET_ON,
  SET_PLAY,
  SET_SOUND,
} from "./actions";
export interface Play {
  isDisplay: boolean;
  colors: string[];
  score: number;
  userPlay: boolean;
  userColors: string[];
}
interface InitialState {
  soundEffect: any,
  isOn: boolean,
  play: Play,
  flashColor: string,
  bestResults: {Name:string,Score:number}[],
}
const initialState:InitialState = {
  soundEffect: null,
  isOn: false,
  play: {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  },
  flashColor: "",
  bestResults: [],
};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SOUND:
      return { ...state, soundEffect: action.payload };
    case SET_ON:
      return { ...state, isOn: action.payload };
    case SET_PLAY:
      return { ...state, play: action.payload };
    case SET_FLASH:
      return { ...state, flashColor: action.payload };
    case SET_BEST_RESULTS:
      return { ...state, bestResults: action.payload };
    default:
      return state;
  }
}
