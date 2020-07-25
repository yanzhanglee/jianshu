import {fromJS} from 'immutable';

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  articlePage: 1,
  showBackTop: false,
});

export default (state = defaultState,action) => {
  switch (action.type) {
    case 'change_home_data':
      //console.log(action);
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      });
    case 'add_home_list':
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage,
      })
    case 'toggle_show':
      if(action.show){
        return state.set('showBackTop',true);
      }else{
        return state.set('showBackTop',false);
      }

    default:
      return state;
  }
}
