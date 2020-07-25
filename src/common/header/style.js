import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const Logo = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  background: url(${logoPic});
  background-size: contain;
`;

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0
`;

export const Nav = styled.div`
  width:  960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  background: ;
`;

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.active {
  color: #ea6f5a;
}

&.left {
  float:left;
}
&.right {
  float:right;
  color: #969696;
}
`;

export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    width: 160px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    
    &::placeholder {
      color: #777
    }
    
    &.focused{
      width: 240px;
    }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  font-size: 14px;
  
  &.reg{
  color: #ec6149;
  }
  &.writting {
  color: #fff;
  background: #ec6149
  }
`;

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  
  .slide-enter{
    transition: all .2s ease-out;
  }
  .slide-enter-active{
    width: 240px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    
    &.focused {
      color: white;
      background: #777;
    }
  }
`;

export const SearchInfo = styled.div`
    z-index:1;
    position: absolute;
    left: 0;
    top: 64px;
    width: 240px;
    padding: 0px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: white;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    .spin {
      display:block;
      float:left;
      font-size:12px;
      margin-right: 2px;
      transition: all .2s ease-in;
      cursor: pointer;
      transform-origin: center center;
      
    }
`;

export const SearchInfoItem = styled.a`
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 8px;
    margin-bottom: 15px;
    
    display: block;
    float:left;
`;
 export const SearchInfoList = styled.div`
    overflow: hidden;
 `;
