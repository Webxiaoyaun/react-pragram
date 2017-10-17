import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

//导入home 模块的reducer
import home from './home/index'

export default combineReducers({
    home,
    routerReducer
})
