import React,{Component} from 'react';
import logo from '../../images/logo.png';
import './index.less';
import {Link} from 'react-router-dom';
export default class Login extends Component{
    constructor(){
        super();
        this.state={checked:true}
    }
    changeChecked=()=>{
        this.setState({checked:!this.state.checked})
    };
    handleLogin=()=>{
        let username=this.refs.username.value;
        let password=this.refs.password.value;
        localStorage.setItem('username',username);
        localStorage.setItem('password',username);
        this.props.history.push('/')
    };
    render(){
        return (
            <div className="container">
                <img src={logo}/>
                <div>
                    <input ref="username" type="text" placeholder="请输入用户名"/>
                </div>
                <div>
                    <input ref="password" type="password" placeholder="请输入密码"/>
                </div>
                <div className="argument">
                    <input type="checkbox" checked={this.state.checked}  onChange={this.changeChecked}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;记住密码

                </div>
                <button className="login-btn" onClick={this.handleLogin}>登录</button>
                <p>没有账号，点此<Link to="/register">注册</Link></p>
            </div>
        )
    }
}

