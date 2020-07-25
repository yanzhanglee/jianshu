import React, { PureComponent} from 'react';
import {
  HomeWrapper, HomeLeft,HomeRight
} from './style';

import Topic from './components/Topic';
import List from './components/List';
import Recommendation from './components/Recommendation';
import Writer from './components/Writer';
import {getHomeInfo, toggleShow} from './store/actionCreators';
import { connect } from 'react-redux';
import {BackTop} from './style';

class Home extends PureComponent {
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeBackTopShow)
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeBackTopShow)
  }

  backTop(){
    window.scrollTo(0,0);
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
          {this.props.showBackTop ? <BackTop onClick={this.backTop}>回到顶部</BackTop> : null}
        </HomeWrapper>
    )
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(getHomeInfo());
  },
  changeBackTopShow(e){
    if(document.documentElement.scrollTop >= 100){
      dispatch(toggleShow(true));
    }else{
      dispatch(toggleShow(false));
    }
  }
});

const mapState = (state) => ({
  showBackTop: state.get('home').get('showBackTop'),
})

export default connect(mapState, mapDispatch)(Home);
