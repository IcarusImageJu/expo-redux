import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { loadedList } from './actions'

import { LOAD_LIST } from "./constants";

export function* getRepos() {
    const requestURL = `https://api.github.com/users/IcarusImageJu/repos?type=all&sort=updated`;
  
    try {
      // Call our request helper (see 'utils/request')
      const repos = yield call(request, requestURL);
      yield put(loadedList(repos));
    } catch (err) {
      console.log(err);
    }
  }

// Individual exports for testing
export default function* homeSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(LOAD_LIST, getRepos);
  }
  