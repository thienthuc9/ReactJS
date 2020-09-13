import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {gameXucXacReducer} from './GameXucXacReducer'


// store tổng
export const  rootReducer = combineReducers({
    // Nơi sẽ chứa store con 
    GioHangReducer:GioHangReducer,
    stateGameXucXac:gameXucXacReducer

})