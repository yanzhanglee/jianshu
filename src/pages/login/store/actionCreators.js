import axios from 'axios';
import {actionTypes} from './index';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true,
})

export const logout = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: false,
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+account+'&password='+password)
        .then((res)=>
        {const result = res.data.data;
        if(result){
          dispatch(changeLogin())
        }else{
          alert('登录失败')
        }
    })
  }
}