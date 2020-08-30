import React, { Component } from 'react'
import SanPham from './SanPham'

export default class BaiTapQLSP extends Component {
    state ={
        sanPhamCT :    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/sp_blackberry.png" }

    }
    // Xác định lưu trữ state(giá trị làm thay đổi giao diện)
    // - Chứa giao diện binding dữ liệu đó ra (trực tiếp hoặc gián tiếp)
    // - Nơi chứa control (nút nhấn) làm thay đổi giá trị state đó (trực tiếp hoặc gián tiếp)


    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {

            return <div key={index} className='col-4'>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet}></SanPham>
               
            </div>
        })

    }
    xemChiTiet = (spClick) =>{
        console.log(spClick);
        this.setState({
            sanPhamCT:spClick
        })
    }
    render() {
        let{maSP,tenSP,hinhAnh,manHinh,heDieuHanh,giaBan} = this.state.sanPhamCT;
        return (
            <div>
            <div className='row'>
                {this.renderSanPham()}

            </div>
            <hr></hr>
            <div className='row'>
                <div className='col-4'>
        <h3>{tenSP}</h3>
                        <img src={hinhAnh}></img>
                </div>
                <div className='col-8'>
                    <h3>Thông Số Kỹ Thuật</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Màn hình</th>
        <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều Hành</th>
        <th>{heDieuHanh}</th>
                            </tr>
                        </thead>
                       
                    </table>
                </div>
            </div>
            </div>
        )
    }
}
