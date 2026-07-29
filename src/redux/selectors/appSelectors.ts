import { AppStateType } from "../store";

export const getLinks = (state: AppStateType) => {
  return state.app.links;
}

export const getWebpackSites = (state: AppStateType) => {
  return state.app.webpackSites;
}

export const getReactSites = (state: AppStateType) => {
  return state.app.reactSites;
}

export const getTechnologies = (state: AppStateType) => {
  return state.app.technologies;
}

export const getActiveLanguage = (state: AppStateType) => {
  return state.app.activeLang;
}


