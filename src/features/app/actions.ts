import { createStandardAction } from 'typesafe-actions';

export const initApp = createStandardAction('@app/INIT_APP')();
export const initAppSuccess = createStandardAction('@app/INIT_APP_SUCCESS')();
