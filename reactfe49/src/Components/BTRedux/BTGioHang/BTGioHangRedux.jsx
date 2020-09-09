import React, { Component } from 'react'
import ModelGioHangRedux from './ModelGioHangRedux'
import DSSanPhamRedux from './DSSanPhamRedux'
import { connect } from 'react-redux';

 class BTGioHangRedux extends Component {
    tinhSoLuongGioHang =()=>{
        return this.props.gioHang.reduce((soLuong,sp,index)=>{
            return soLuong+=sp.soLuong
        },0)
    }
    render() {
        return (
            <div className='container'>
                <h3 className='text-center text-danger'>Bài tập giỏ hàng Redux</h3>
                <div className='gioHang'>
                    <div className='text-right text-danger'>
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng ({this.tinhSoLuongGioHang()}) </span>
                    </div>
                    <ModelGioHangRedux></ModelGioHangRedux>
                </div>
                <DSSanPhamRedux></DSSanPhamRedux>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{ //state: là store tổng, => truy xuất đến giỏ hàng Reducer
    return{
        gioHang:state.GioHangReducer.gioHang
    }
}
export default connect(mapStateToProps,null)(BTGioHangRedux)