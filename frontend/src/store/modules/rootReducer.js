import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import contrast from './contrast/reducer';

export default combineReducers({
  auth,
  user,
  contrast,
});
