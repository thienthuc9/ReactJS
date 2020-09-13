import{THEM_SINH_VIEN} from '../Types/QuanLiSinhVienType.js'
export const themSinhVienAction =(sinhVien)=>{
    return{
        type:THEM_SINH_VIEN,
        sinhVien
    }
}