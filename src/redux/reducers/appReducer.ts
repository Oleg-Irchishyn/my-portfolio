import { LinkType, SitesType, TechnologiesType } from './../types/types';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './../store';
import html5 from '../../assets/images/technologies/html5.png';
import css3 from '../../assets/images/technologies/css3.png';
import scss from '../../assets/images/technologies/scss.png';
import bootstrap from '../../assets/images/technologies/bootstrap.png';
import js from '../../assets/images/technologies/js.png';
import ts from '../../assets/images/technologies/ts.png';
import react from '../../assets/images/technologies/react.png';
import jquery from '../../assets/images/technologies/jquery.png';
import webpack from '../../assets/images/technologies/webpack.png';
import git from '../../assets/images/technologies/git.png';
const INITIALIZED_SUCCESS = 'PORTFOLIO/APP/INITIALIZED_SUCCESS';
const SET_ACTIVE_LANG = 'PORTFOLIO/APP/SET_ACTIVE_LANG';

let initialState = {
  activeLang: 'en' as string,
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
      title: 'Sneakers E-Shop',
      url: 'https://react-sneakers-eshop.herokuapp.com/#/',
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
      title: 'Diamond Drilling Services Landing Page',
      url: 'http://almaz-ok.kiev.ua/index_eng.html',
    },
    { title: 'Fjord Landing', url: 'https://oleg-irchishyn.github.io/Fjord_Landing_Staging/' },
    {
      title: 'Up Real Estate Landing',
      url: 'https://oleg-irchishyn.github.io/UP_Real_Staging/',
    },
  ] as Array<SitesType>,
  technologies: [
    {
      title: 'html5',
      image: html5
    },
    {
      title: 'css3',
      image: css3
    },
    {
      title: 'scss',
      image: scss
    },
    {
      title: 'javascript',
      image: js
    },
    {
      title: 'reactJS',
      image: react
    },
    {
      title: 'typescript',
      image: ts
    },
    {
      title: 'jquery',
      image: jquery
    },
    {
      title: 'webpack',
      image: webpack
    },
    {
      title: 'bootstrap',
      image: bootstrap
    },
    {
      title: 'git',
      image: git
    }
  ]  as Array<TechnologiesType>
};

const appReducer = (state = initialState, action: ActionsTypes): initialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

      case SET_ACTIVE_LANG:
        return {
          ...state,
          activeLang: action.payload,
        };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({ type: INITIALIZED_SUCCESS } as const),
  setActiveLanguage: (lang: string) => ({ type: SET_ACTIVE_LANG, payload: lang } as const),
};

export const initializeApp = () => (dispatch: ThunkDispatchType) => {
  dispatch(actions.initializedSuccess());
};

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkDispatchType = ThunkDispatch<AppStateType, {}, ActionsTypes>;

export default appReducer;
