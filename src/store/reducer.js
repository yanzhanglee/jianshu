//数据以及关于数据的所有处理，都放在 reducer 文件们中

import {reducer as headerReducer} from '../common/header/store';
import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
});

