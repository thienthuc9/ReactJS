import React, { Component } from 'react'

export default class SanPhamGH extends Component {
    render() {
        let {sp,themGioHang} = this.props;
        return (
            <div>
                <div style={{ height: 500 }} className="card">
                    <img className="card-img-top" style={{ height: 350 }} src={sp.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                        <button className='btn btn-success' onClick={()=>{
                            themGioHang(sp)
                        }}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
