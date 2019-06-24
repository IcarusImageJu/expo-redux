/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { LOADED_LIST } from './constants';

// The initial state of the App
export const initialState = {
  list: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOADED_LIST:
        draft.list = action.list;
        break;
    }
  });

export default homeReducer;