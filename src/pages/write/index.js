import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent {
  render() {
    const {loginStatus} = this.props;
    if(loginStatus){
      return (
          <div>Success In</div>
      )
    }else {
      return <Redirect to={'/login'}/>
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.get('login').get('login')
})
export default connect(mapState,null)(Write);