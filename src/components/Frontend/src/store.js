import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './reducers/userReducers';
import {
  postListReducer,
  postDetailsReducer,
  postCreateReducer,
  postUpdateReducer,
  postDeleteReducer,
} from './reducers/postReducers';
import {
  commentListReducer,
  commentCreateReducer,
  commentApproveReducer,
} from './reducers/commentReducers';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  postList: postListReducer,
  postDetails: postDetailsReducer,
  postCreate: postCreateReducer,
  postUpdate: postUpdateReducer,
  postDelete: postDeleteReducer,
  commentList: commentListReducer,
  commentCreate: commentCreateReducer,
  commentApprove: commentApproveReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
