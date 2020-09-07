//khởi tạo giá trị ban đầu
const stateGioHang ={
    gioHang: [
        // { maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', giaBan: 1000, soLuong: 1 }
    ],
}
export const  GioHangReducer = (state=stateGioHang,action)=>{
    console.log(action)
    switch(action.type){
        case 'THEM_GIO_HANG':{
            let gioHangCN = [...state.gioHang];
            let index = gioHangCN.findIndex(spGH=>spGH.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCN[index].soLuong +=1;

            }else{
                gioHangCN.push(action.spGioHang)
            }
            state.gioHang = gioHangCN;
            return {...state};   
        }
        case 'XOA_GIO_HANG':{
            let gioHangCN = [...state.gioHang];
            gioHangCN.splice(action.index,1)
            state.gioHang = gioHangCN;
            return {...state};   
        }
        case 'XOA_GIO_HANG_MA':{
            let gioHangCN = [...state.gioHang];
            let index = gioHangCN.findIndex(spGH=>spGH.maSP === action.maSP);
            if(index !== -1){
                gioHangCN.splice(action.index,1)

            }
            state.gioHang = gioHangCN;
            return {...state};   
        }
        case 'TANG_GIAM':{
            let gioHangCN = [...state.gioHang];
            let index = gioHangCN.findIndex(spGH=>spGH.maSP === action.maSP);
            if(index !== -1){
               if(action.tangGiam === true){
                   gioHangCN[index].soLuong +=1;
               }else{
                   if(gioHangCN[index].soLuong >1){
                    gioHangCN[index].soLuong -=1;
                   }else{
                    gioHangCN.splice(action.index,1)
                   }
               }

            }
            state.gioHang = gioHangCN;
            return {...state};   
        }
    }

    return{...state}
}