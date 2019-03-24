import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const tempReducer = (state = {}, action = {}) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({ tempReducer, form: formReducer });
