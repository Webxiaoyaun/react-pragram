import React,{Component} from 'react';
import logo from '../../images/logo.png';
import './index.less';
import {Link} from 'react-router-dom';
export default class Login extends Component{

    render(){
        return (
            <div className="container">
                <img src={logo}/>
                <div>
                    <input type="text" placeholder="请输入用户名"/>
                </div>
                <div>
                    <input type="text" placeholder="请输入手机号"/>
                </div>
                <button className="login-btn">登录</button>
                <p>没有有账号，点此<Link to="/register">注册</Link></p>
            </div>
        )
    }
}

