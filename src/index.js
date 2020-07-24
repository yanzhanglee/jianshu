import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style';
import {IconFont} from './statics/iconfont/iconfont';
import App from './App';


ReactDOM.render(
  <div>
    <Globalstyle/>
    <IconFont/>
    <App />
  </div>,
  document.getElementById('root')
);
