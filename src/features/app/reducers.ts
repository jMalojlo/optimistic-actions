import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { appActions } from '.';

export type AppState = Readonly<{
  started: boolean;
}>;

export type AppActions = ActionType<typeof appActions>;

const appReducer = combineReducers<AppState, AppActions>({
  started: (state = false, action) => {
    switch (action.type) {
      case getType(appActions.initAppSuccess):
        return true;

      default:
        return state;
    }
  },
});

export default appReducer;
