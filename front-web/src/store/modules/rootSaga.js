import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';
import plans from './plans/sagas';
import registration from './registration/sagas';
import helporders from './helpOrders/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, plans, registration, helporders]);
}
