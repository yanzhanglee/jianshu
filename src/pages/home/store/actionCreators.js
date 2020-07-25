import axios from 'axios';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type: 'change_home_data',
  topicList: result.topicList,
  articleList: result.articleList
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result));
    }).catch(()=>{
      console.log('error');
    })
  }
}

const addHomeList = (list,nextPage) => ({
  type: 'add_home_list',
  list: fromJS(list),
  nextPage
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res)=>{
      const result = res.data.data;
      dispatch(addHomeList(result,page + 1));
    }).catch(()=>{
      console.log('error');
    })
  }
}

export const toggleShow = (show) => ({
  type: 'toggle_show',
  show
})