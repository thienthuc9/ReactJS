import React, { Component } from 'react'
//kết nối redux {kết nối react component vs redux store}
import{connect} from 'react-redux';

 class ModelGioHangRedux extends Component {
     renderGioHang =()=>{
         return this.props.gioHang.map((sp,index)=>{
             return <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <img style={{width:150}} src = {sp.hinhAnh}></img>
                       </td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>
                        <button onClick={()=>{
                            {this.props.tangGiamSL(sp.maSP,false)}
                        }}>-</button>
                        {sp.soLuong}
                        <button onClick={()=>{
                            {this.props.tangGiamSL(sp.maSP,true)}
                        }}
                        >+</button>
                        </td>
                    <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>

                    <td><button className='btn btn-danger'onClick={()=>{
                        {this.props.xoaGioHang(index)}
                    }}>Xóa</button>
                    <button className='btn btn-danger'onClick={()=>{
                        {this.props.xoaGioHangMa(sp.maSP)}
                    }}>Xóa THEO MA</button>
                    </td>
             </tr>
         })
     }
    render() {
        return (
            <div>

                <div>
                    {/* <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                        Launch
  </button> */}
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">giỏ hàng của bạn</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Mã Sản Phẩm</th>
                                                <th>Hình ảnh</th>

                                                <th>Tên Sản Phẩm</th>

                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>

                                                <th>Thành Tiền</th>
                                                <th></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderGioHang()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5"></td>
                                                <td >Tổng Tiền</td>
                                                <td>
                                                    {
                                                        this.props.gioHang.reduce((tongtien, sp, index) => {
                                                            return tongtien += sp.giaBan * sp.soLuong
                                                        }, 0).toLocaleString()
                                                    }
                                                </td>
                                            </tr>

                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) =>{ //state: là store tổng, => truy xuất đến giỏ hàng Reducer
    return{
        gioHang:state.GioHangReducer.gioHang
    }
}
const mapDepactToPtops =(dispatch)=>{
    return{
        xoaGioHang:(index)=>{
                const action={
                    type:'XOA_GIO_HANG',
                    index
                }
                dispatch(action);
        },
        xoaGioHangMa:(maSP)=>{
            const action={
                type:'XOA_GIO_HANG_MA',
                maSP
            }
            dispatch(action);
        
    },
    tangGiamSL:(maSP,tangGiam)=>{
        const action={
            type:'TANG_GIAM',
            maSP,
            tangGiam
        }
        dispatch(action);
    }
    }
}
export default connect(mapStateToProps,mapDepactToPtops)(ModelGioHangRedux)