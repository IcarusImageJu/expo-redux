/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import { CHANGE_LOCALE } from './constants';
import { fallback } from '../../config/i18n';

export const initialState = {
  locale: fallback
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });

export default languageProviderReducer;