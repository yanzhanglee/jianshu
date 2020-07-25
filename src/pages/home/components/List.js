import React, {PureComponent} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent {
  render() {
    const {list} = this.props;
    return (
        <div>
          {list.map((item,index) => {
            return (
                <Link
                  key={index}
                  to={'/detail/'+ item.get('id')}
                >
                <ListItem key={index}>
                  <img
                      className="list-img"
                      src={item.get('imgURL')}
                      alt = ''
                  />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='dsc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
                </Link>
            )
          })}
          <LoadMore
            onClick={()=>this.props.handleLoadMore(this.props.page)}
          >
            加载更多
          </LoadMore>
        </div>
    )
  }
}

const mapState = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.get('home').get('articlePage'),
})

const mapDispatch = (dispatch) => ({
  handleLoadMore(page){
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState,mapDispatch)(List);
