import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

export default class BaiTapGioHang extends Component {
    //sateGio Hang

    state = {
        gioHang: [
            // { maSP: 1, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 1000, soluong: 1 }
        ]

    }

    mangSP =
        [

            { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/sp_blackberry.png" },

            { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/sp_iphoneX.png" },

            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/sp_note7.png" }

        ]
        //phương thức thêm giỏ hàng
        themGioHang =(spClick)=>{
            //Tạo ra 1 sp giỏ hàng từ sp đc click
            let spGioHang ={
                maSP: spClick.maSP,
                tenSP: spClick.tenSP,
                hinhAnh : spClick.hinhAnh,
                gia: spClick.giaBan,
                soluong: 1
            }
           let gioHangUpdate = this.state.gioHang;
        //    gioHangUpdate.push(spGioHang);
           // tìm sp có trong giỏ hàng ko
           let index = gioHangUpdate.findIndex(spGH => spGH.maSP === spGioHang.maSP)
           // tìm thấy sản phẩm
           if(index != -1){
                gioHangUpdate[index].soluong +=1
           }
           // không tìm thấy trong giỏ hàng
           else{
            gioHangUpdate.push(spGioHang);
           }
           this.setState({
               gioHang:gioHangUpdate
           })
        }
        xoaGioHang =(maSP)=>{
                // let gioHang = this.state.gioHang;
                // //tìm xem trong giỏ hàng có mã sp đc click ko
                // let index = gioHang.findIndex(sp => sp.maSP ===maSP);
                // if(index !== -1){
                //     gioHang.splice(index,1)
                // }
                this.setState({
                    gioHang:this.state.gioHang.filter(sp => sp.maSP !==maSP)
                })
        }
        tinhSoLuongGioHang =()=>{
            return this.state.gioHang.reduce((soluong,sp,index)=>{
                return soluong+=sp.soluong
            },0)
        }
        tangGiamsoluong =(maSP,tangGiam)=>{ //tangGiam == true thì tăng, tăng giảm == flase thì giảm
            let gioHangUpdate = this.state.gioHang;
            let index = gioHangUpdate.findIndex(sp => sp.maSP === maSP);
            if(index!== -1){
                if(tangGiam){
                    gioHangUpdate[index].soluong+=1;
                }else{
                    if(gioHangUpdate[index].soluong >1){
                        gioHangUpdate[index].soluong -=1;
                    }else{
                       gioHangUpdate.splice(index,1);
                    }
                }
            }
            this.setState({
                gioHang:gioHangUpdate
            })
        }
    render() {
        return (
            <div className="container">
                <h3 className='text-center'>Bài Tập giỏ hàng</h3>
                <div className='gioHang'>
                    <div className='text-right text-danger'>
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng ({this.tinhSoLuongGioHang()})</span>
                    </div>
                    <GioHang gioHang ={this.state.gioHang} xoaGH={this.xoaGioHang} tangGiam ={this.tangGiamsoluong}></GioHang>
                </div>

                <DanhSachSanPham mangSanPham={this.mangSP} themGioHang={this.themGioHang}></DanhSachSanPham>
            </div>
        )
    }
}
