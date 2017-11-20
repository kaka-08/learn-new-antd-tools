/*
import React,{ Component } from "react";
import store from "./Store";
import ReactDOM from "react-dom";
// react-redux 提供的 Provider： 提供包含store的context 
import { Provider } from "react-redux"; 
import TestProvider from "./containers/test-provider";
import {Button} from "learn-antd";


export default class Root extends Component{
   render(){
     var txt = Button();
     return(
	    <div>{txt}</div>
     	)
   }
}

ReactDOM.render(
    <Root />,
    document.getElementById('container')
)*/


/* eslint no-console:0 */
function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}


module.exports = require('./components');
