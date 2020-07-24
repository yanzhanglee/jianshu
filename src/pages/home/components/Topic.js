import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
  TopicItem,
  TopicWrapper,
} from '../style';

class Topic extends Component {
  render() {
    return (
        <TopicWrapper>
          {this.props.list.map((item) => {
            return (
                <TopicItem key={item.get('id')}>
                  <img
                      className="topic-img"
                      src={item.get('imgURL')}
                      alt=''
                  />
                  {item.get('name')}
                </TopicItem>
            )
          })}

        </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('topicList')
})


export default connect(mapState,null)(Topic);//不用改数据，所以不用dispatch
