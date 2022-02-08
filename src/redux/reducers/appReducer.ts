import { LinkType } from './../types/types';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './../store';
const INITIALIZED_SUCCESS = 'SK/APP/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false as boolean,
  links: [
    {
      text: 'About',
      dataScroll: 'about',
    },
    {
      text: 'Portfolio',
      dataScroll: 'portfolio',
    },
    {
      text: 'Technologies stack',
      dataScroll: 'technologies-stack',
    },
    {
      text: 'Contacts',
      dataScroll: 'contacts',
    },
  ] as Array<LinkType>,
};

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED_SUCCESS } as const),
};

export const initializeApp = () => (dispatch: ThunkDispatchType) => {
  dispatch(actions.initializedSuccess());
};

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkDispatchType = ThunkDispatch<AppStateType, {}, ActionsTypes>;

export default appReducer;
