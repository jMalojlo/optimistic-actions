import { combineEpics, Epic } from 'redux-observable';
import { filter, map, tap } from 'rxjs/operators';
import Types from 'Types';
import { isActionOf } from 'typesafe-actions';
import { appActions } from './';

const initApp: Epic<
  Types.RootAction,
  Types.RootAction,
  Types.RootState,
  Types.Services
> = action$ =>
  action$.pipe(
    filter(isActionOf(appActions.initApp)),
    // tslint:disable-next-line: no-console
    map(() => appActions.initAppSuccess()),
    tap(() => console.log('App started'))
  );

export default combineEpics(initApp);
