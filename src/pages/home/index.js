import React, {Component} from 'react';
import {
  HomeWrapper, HomeLeft,HomeRight
} from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommendation from './components/Recommendation';
import Writer from './components/Writer';
import {getHomeInfo} from './store/actionCreators';
import { connect } from 'react-redux';

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData();
  }

  render() {
    return (
        <HomeWrapper>
          <HomeLeft>
            <img
                className='banner-img'
                alt=''
                src="https://upload.jianshu.io/admin_banners/web_images/4993/421ec96ccef8aea708c84ba2972b5be484695f25.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommendation/>
            <Writer/>
          </HomeRight>
        </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = getHomeInfo();
    dispatch(action);
  }
});

export default connect(null,mapDispatch)(Home);
