import React, {Component} from 'react';
import {
  HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
  SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {actionCreators as loginAC} from '../../pages/login/store';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  getListArea(show) {
    const { list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props;
    const jsList = list.toJS();
    const pageList = [];

    if(jsList.length){
      for(let i=(page-1)*10; i < page*10 && jsList[i]!==null; i++){
        pageList.push(
            <SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>
        )
      }
    }

    if(show || mouseIn){
      return(
          <SearchInfo
              onMouseEnter = {handleMouseEnter}
              onMouseLeave = {handleMouseLeave}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch
                onClick={() => handleChangePage(page,totalPage, this.spinIcon)}
              >
                <i
                    className='iconfont spin'
                    ref={(icon)=>{this.spinIcon = icon}}
                >&#xe851;</i>
                换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              {pageList}
            </SearchInfoList>
          </SearchInfo>
      )
    }else{
      return null;
    }
  }

  render() {
    const {list,focused, handleFocus, handleBlur,login, logout} = this.props;
    return (
        <div>
          <HeaderWrapper>
            <Link to='/'>
              <Logo href='/'/>
            </Link>
            <Nav>
              <NavItem className = 'left active'>首页</NavItem>
              <NavItem className = 'left'>下载App</NavItem>
              {login ? <NavItem className = 'right' onClick = {logout}>退出</NavItem> : <Link to={'/login'}><NavItem className = 'right'>登录</NavItem></Link>}
              <NavItem className = 'right'><i className = 'iconfont'>&#xe636;</i></NavItem>
              <SearchWrapper>
                <CSSTransition
                    timeout = {200}
                    in = {focused}
                    classNames = "slide"
                >
                  <NavSearch
                      onFocus = {() => handleFocus(list)}
                      onBlur = {handleBlur}
                      className = {focused ? 'focused':'' }/>
                </CSSTransition>
                <i className = {focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe614;</i>
                {this.getListArea(focused)}
              </SearchWrapper>
            </Nav>
            <Addition>
              <Link to={'/write'}>
              <Button className = 'writting'>
                <i className='iconfont'>&#xe708;</i>
                写文章
              </Button>
              </Link>
              <Button className = 'reg'>注册</Button>
            </Addition>
          </HeaderWrapper>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    focused: state.get('header').get('focused'),
    //focused: state.getIn['header','focused'];
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage'),
    login: state.get('login').get('login'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list){
      if(list.size === 0 ){
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.searchFocus());
    },
    handleBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.handleMouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.handleMouseLeave());
    },
    handleChangePage(page, totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      if (originAngle){
        originAngle = parseInt(originAngle, 10);
      }else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+ (originAngle+360) +'deg)';
      if (page<totalPage){
        dispatch(actionCreators.handleChangePage(page+1));
      }else{
        dispatch(actionCreators.handleChangePage(1));
      }
    },
    logout(){
      dispatch(loginAC.logout());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

