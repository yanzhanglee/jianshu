import * as actionTypes from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) =>{
    const data = res.data;
    dispatch(changeList(data.data));
    }).catch(() => {
      console.log('error');
    })
  }
}
export const handleMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER,
});
export const handleMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE,
})
export const handleChangePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})

const changeList = (data) =>  ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)//取整
})
