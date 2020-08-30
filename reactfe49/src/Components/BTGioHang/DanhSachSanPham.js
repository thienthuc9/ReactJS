import React, { Component } from 'react'
import SanPhamGH from './SanPhamGH'
import SanPham from '../Props/SanPham'

export default class DanhSachSanPham extends Component {
    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {

            return <div key={index} className='col-4'>
                <SanPhamGH sp={sanPham} themGioHang ={this.props.themGioHang} ></SanPhamGH>
               
            </div>
        })

    }
    render() {
        return (
            <div>
                <div className='row'>
                   {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
