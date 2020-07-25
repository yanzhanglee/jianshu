import React, {PureComponent} from 'react';
import { RecommendItem } from '../style';
import { connect } from 'react-redux';

class Recommendation extends PureComponent {
  render() {
    return (
        <div
            styles='width: 280px'
        >
          <RecommendItem>
            <a href="/mobile/club">
              <img
                  className='recommend-img'
                  alt=''
                  src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/>
            </a>
          </RecommendItem>
          <RecommendItem>
            <a href="/mobile/club">
              <img
                  className='recommend-img'
                  alt=''
                  src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/>
            </a>
          </RecommendItem>
          <RecommendItem>
            <a href="/mobile/club">
              <img
                  className='recommend-img'
                  alt=''
                  src='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'/>
            </a>
          </RecommendItem>
          <RecommendItem>
            <a href="/mobile/club">
              <img
                  className='recommend-img'
                  alt=''
                  src='//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/>
            </a>
          </RecommendItem>
          <RecommendItem>
            <a href="/mobile/club">
              <img
                  className='recommend-img'
                  alt=''
                  src='https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'/>
            </a>
          </RecommendItem>
        </div>
    )
  }
}

export default Recommendation;
