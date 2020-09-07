import React, { Component } from 'react'
import SanPhamRedux from './SanPhamRedux'

export default class DSSanPhamRedux extends Component {
    mangSP =
        [

            { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/sp_blackberry.png" },

            { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/sp_iphoneX.png" },

            { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/sp_note7.png" }

        ]
    renderDSSanPham = ()=>{
        return this.mangSP.map((sp,index)=>{
            return <div className='col-4' key={index}>
                <SanPhamRedux sp ={sp}></SanPhamRedux>
            </div>
        })
    }
    render() {
        return (
            <div className='container'>
                <h3>Danh Sach San Pham</h3>
                <div className='row'>
                {this.renderDSSanPham()}
                </div>
               
            </div>
        )
    }
}
