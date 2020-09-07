import React, { Component } from 'react'
import ModelGioHangRedux from './ModelGioHangRedux'
import DSSanPhamRedux from './DSSanPhamRedux'
import { connect } from 'react-redux';

 class BTGioHangRedux extends Component {
    render() {
        return (
            <div className='container'>
                <h3 className='text-center text-danger'>Bài tập giỏ hàng Redux</h3>
                <div className='gioHang'>
                    <div className='text-right text-danger'>
                        <span data-toggle="modal" data-target="#modelId" style={{ cursor: 'pointer' }}>Giỏ hàng  </span>
                    </div>
                    <ModelGioHangRedux></ModelGioHangRedux>
                </div>
                <DSSanPhamRedux></DSSanPhamRedux>
            </div>
        )
    }
}
const mapDepactToPtops = (dispatch) => {
    return {
        tangSL: (maSP) => {
            const action = {
                type: 'TANG_SL',
                maSP
            }
            dispatch(action);
        }
    }
}
export default connect(null,mapDepactToPtops)(BTGioHangRedux)