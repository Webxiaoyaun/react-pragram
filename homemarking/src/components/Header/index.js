import  React,{Component} from 'react'
import './index.less'

export  default class Header extends Component{

       render(){
           // console.log(window.location);
           let path = window.location.hash;
           path = path.slice(1);
          return(
            <div className="header">
                {
                    (function () {
                        switch (path){
                            case '/':
                                return '首页';
                            case  '/register':
                                return '注册页';
                            case  '/Login':
                                return '登录页';
                            case  '/order':
                                return '订单页';
                            case  '/profile':
                                return '个人中心';
                            default:
                                return'哈哈'
                        }
                    })()
                }
            </div>
          )
       }
}