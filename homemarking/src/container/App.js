import React,{Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import '../style/common.less';
import Home from './Home/index';
import Register from './Register/index';
import Login from "./Login/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

//引入store

export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
