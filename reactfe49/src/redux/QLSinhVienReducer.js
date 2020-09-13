import { THEM_SINH_VIEN } from "./Types/QuanLiSinhVienType"

const initialState = {
    mangSinhVien: [
        { maSinhVien: 1, tenSinhVien: 'TiTi HKT', soDienThoai: 132132132, email: 'phandinhthethien@gmail.com' },
        { maSinhVien: 2, tenSinhVien: 'TiTi HKTPP', soDienThoai: 132132132, email: 'blackpink   @gmail.com' }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case THEM_SINH_VIEN:{
            state.mangSinhVien =[...state.mangSinhVien,action.sinhVien]
            return{...state}
        }
        default:
            return state
    }
}

