import { AppStateType } from "../store";

export const getLinks = (state: AppStateType) => {
  return state.app.links;
}

export const getSites = (state: AppStateType) => {
  return state.app.sites;
}

export const getTechnologies = (state: AppStateType) => {
  return state.app.technologies;
}

export const getActiveLanguage = (state: AppStateType) => {
  return state.app.activeLang;
}


