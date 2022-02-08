import { AppStateType } from "../store";

export const getLinks = (state: AppStateType) => {
  return state.app.links;
}

