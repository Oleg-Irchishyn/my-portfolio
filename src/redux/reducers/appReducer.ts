import { LinkType, SitesType } from './../types/types';
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
  sites: [
    {
      title: 'Gambling Quiz',
      url: 'https://react-iq-quiz-app.herokuapp.com/',
    },
    {
      title: 'Todo List',
      url: 'https://reactjs-todo-lists-app.herokuapp.com/#/',
    },
    {
      title: 'Pizza E-Shop',
      url: 'https://react-pizza-eshop.herokuapp.com/#/',
    },
    {
      title: 'Budget Calculation App',
      url: 'https://oleg-irchishyn.github.io/React-Budget-App/',
    },
    {
      title: 'Library E-Shop',
      url: 'https://oleg-irchishyn.github.io/E-shop/',
    },
    {
      title: `Smile Expo's New Design`,
      url: 'https://oleg-irchishyn.github.io/smile-expo-proto/web/',
    },
    {
      title: 'Diamon Drilling Services Landing Page',
      url: 'http://almaz-ok.kiev.ua/index_eng.html',
    },
    { title: 'Fjord Landing', url: 'https://oleg-irchishyn.github.io/Fjord_Landing_Staging/' },
    {
      title: 'Up Real Estate Landing',
      url: 'https://oleg-irchishyn.github.io/UP_Real_Staging/',
    },
  ] as Array<SitesType>,
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
