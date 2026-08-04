import { LinkType, SitesType, TechnologiesType } from './../types/types';
import { ThunkDispatch } from 'redux-thunk';
import { AppStateType, InferActionsTypes } from './../store';
import html5 from '../../assets/images/technologies/html5.png';
import css3 from '../../assets/images/technologies/css3.png';
import scss from '../../assets/images/technologies/scss.png';
import mui from '../../assets/images/technologies/mui.png';
import js from '../../assets/images/technologies/js.png';
import ts from '../../assets/images/technologies/ts.png';
import react from '../../assets/images/technologies/react.png';
import next from '../../assets/images/technologies/next.png';
import webpack from '../../assets/images/technologies/webpack.png';
import git from '../../assets/images/technologies/git.png';
import node from '../../assets/images/technologies/node.png';
import express from '../../assets/images/technologies/Express.png';
import nest from '../../assets/images/technologies/nest.png';
import graphql from '../../assets/images/technologies/graphql.png';

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
  webpackSites: [
    { title: 'Fjord Landing', url: 'https://oleg-irchishyn.github.io/Fjord_Landing/web/' },
    {
      title: 'Diamond Drilling Services Landing Page',
      url: 'https://oleg-irchishyn.github.io/Almazok/web/',
    },
    {
      title: 'Up Real Estate Landing',
      url: 'https://oleg-irchishyn.github.io/Up_Real_Estate/web/',
    },
    {
      title: `Smile Expo's New Design`,
      url: 'https://oleg-irchishyn.github.io/smile-expo-proto/web/',
    },
  ] as Array<SitesType>,
  fullstackSites: [
    {
      title: 'Paint Online',
      url: 'https://oleg-irchishyn.github.io/paint-online-course/',
    },
  ] as Array<SitesType>,
  reactSites: [
    {
      title: 'Gambling Quiz',
      url: 'https://oleg-irchishyn.github.io/React_Quiz/web/',
    },
    {
      title: 'Pizza E-Shop',
      url: 'https://oleg-irchishyn.github.io/React_Pizza/web/',
    },
    {
      title: 'Sneakers E-Shop',
      url: 'https://oleg-irchishyn.github.io/React-Sneakers-Eshop/web/#/',
    },
    {
      title: 'Todo List',
      url: 'https://oleg-irchishyn.github.io/ReactJS_ToDo_List/web/',
    },
  ] as Array<SitesType>,
  technologies: [
    {
      title: 'javascript',
      image: js,
    },
    {
      title: 'react.js',
      image: react,
    },
    {
      title: 'typescript',
      image: ts,
    },
    {
      title: 'next.js',
      image: next,
    },
    {
      title: 'node.js',
      image: node,
    },
    {
      title: 'express.js',
      image: express,
    },
    {
      title: 'nest.js',
      image: nest,
    },
    {
      title: 'graphql',
      image: graphql,
    },
    {
      title: 'html5',
      image: html5,
    },
    {
      title: 'css3',
      image: css3,
    },
    {
      title: 'scss',
      image: scss,
    },
    {
      title: 'webpack',
      image: webpack,
    },
    {
      title: 'material ui',
      image: mui,
    },
    {
      title: 'git',
      image: git,
    },
  ] as Array<TechnologiesType>,
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
  initializedSuccess: () => ({ type: INITIALIZED_SUCCESS }) as const,
  setActiveLanguage: (lang: string) => ({ type: SET_ACTIVE_LANG, payload: lang }) as const,
};

export const initializeApp = () => (dispatch: ThunkDispatchType) => {
  dispatch(actions.initializedSuccess());
};

export type initialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkDispatchType = ThunkDispatch<AppStateType, {}, ActionsTypes>;

export default appReducer;
