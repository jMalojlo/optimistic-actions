import { StateType } from 'typesafe-actions';

import { rootReducer } from '~src/store';
import { AppActions } from '~src/features/app';
import * as services from '~src/services';

declare module 'Types' {
  export type RootState = StateType<typeof rootReducer>;
  export type RootAction = AppActions;
  export type Services = typeof services;
}
