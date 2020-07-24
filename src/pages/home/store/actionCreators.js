import axios from 'axios';

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

