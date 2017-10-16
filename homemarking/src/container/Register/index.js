import React,{Component} from 'react';
import logo from '../../images/logo.png';
import './index.less';
import {Link} from 'react-router-dom';
export default class Register extends Component{
    constructor(){
        super();
        this.state={checked:true}
    }
    changeChecked=()=>{
        this.setState({checked:!this.state.checked})
    };
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
                <div>
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <div>
                    <input type="password" placeholder="再次输入密码"/>
                </div>
                <div className="argument">
                    <input type="checkbox" checked={this.state.checked}  onChange={this.changeChecked}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;同意
                    <a href="javascript:;">《啊玉家帮用户协议》</a>
                </div>
                <button className="register-btn">注册</button>
                <p>已有账号，点此<Link to="/login">登录</Link></p>
            </div>
        )
    }
}
