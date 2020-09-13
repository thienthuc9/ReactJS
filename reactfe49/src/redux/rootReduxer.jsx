import {combineReducers} from 'redux';
import {GioHangReducer} from './GioHangReducer'
import {gameXucXacReducer} from './GameXucXacReducer'
import QLSinhVienReducer from './QLSinhVienReducer'

// store tổng
 const rootReducer = combineReducers({
    // Nơi sẽ chứa store con 
    GioHangReducer:GioHangReducer,
    stateGameXucXac:gameXucXacReducer,
    QLSinhVienReducer


})
export default rootReducer
