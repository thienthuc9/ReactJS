import React, { Component } from 'react'

export default class GioHang extends Component {
    renderGioHang = () => {
        return this.props.gioHang.map((sp, index) => {
            return <tr key={index}>
                <td>{sp.maSP}</td>
                <td>
                    <img src={sp.hinhAnh} style={{ width: 50, height: 50 }}></img>
                </td>
                <td>
                    {sp.tenSP}
                </td>
                <td>
                    <button onClick={() => {
                        this.props.tangGiam(sp.maSP, false)
                    }}>-</button>
                    {sp.soluong}
                    <button onClick={() => {
                        this.props.tangGiam(sp.maSP, true)
                    }}>+</button>
                </td>
                <td>
                    {sp.gia.toLocaleString()}
                </td>


                <td>
                    {(sp.gia * sp.soluong).toLocaleString()}
                </td>
                <td>
                    <button className='btn btn-danger' onClick={() => {
                        this.props.xoaGH(sp.maSP)
                    }}>Xoá</button>
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
                                                            return tongtien += sp.gia * sp.soluong
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
