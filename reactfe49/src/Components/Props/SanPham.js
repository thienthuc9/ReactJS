import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let f = this.props.sp
        return (
            <div>
                 <div  style={{height:500}} className="card text-left">
                    <img className="card-img-top" style={{ height: 350 }} src={f.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{f.tenSP}</h4>
                        <button onClick ={()=>{
                            this.props.xemChiTiet(f)
                        }} className='btn btn-success'>Xem Chi Tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
