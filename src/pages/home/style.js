import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  
  overflow:hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top:30px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
    border-radius: 8px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  margin-left: 15px;
  padding-top:30px;
  float: right;
`;
// ----Topic-----
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height:32px;
  font-size:14px;
  color: #000;
  border: 1px solid #DCDCDC;
  border-radius: 4px;
  background: #f7f7f7;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  
  .topic-img{
    display:block;
    float: left;
    width:32px;
    height:32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-img{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 8px;
  }
  
`;

export const ListInfo = styled.div`
  width: 480px;
  float:left;
  .title {
    font-size:18px;
    line-height:27px;
    font-weight: bold;
    color: #333;
  }
  .dsc {
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendItem = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  width: 280px;
  height: 50px;
  
  .recommend-img{
    width: 100%;
    min-height:40px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const WriterWrapper = styled.div`
  box-sizing: border-box;
  display:block;
  margin-top: 20px;
  padding-top: 0;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  height: 600px;
  text-align: center;
  border-radius: 4px;
  
`;

export const LoadMore = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
`;

export const BackTop = styled.div `
  position: fixed;
  right: 100px;
  bottom: 100px;
  font-size: 14px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 2px;
`;
