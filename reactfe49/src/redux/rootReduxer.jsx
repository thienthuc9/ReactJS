import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'

// store tổng
export const  rootReducer = combineReducers({
    // Nơi sẽ chứa store con 
    GioHangReducer:GioHangReducer
})