import React, { Component } from 'react'
import{connect} from 'react-redux';


 class SanPhamRedux extends Component {
    render() {
        return (
            <div>
                <div style={{ height: 500 }} className="card">
                    <img className="card-img-top" style={{ height: 350 }} src={this.props.sp.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.sp.tenSP}</h4>
                        <p className="card-text">{this.props.sp.giaBan.toLocaleString()}</p>
                        <button className='btn btn-success' onClick={()=>{this.props.themGioHang(this.props.sp)}}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}
// xây dựng hàm xử lý sự kiện đưa lên store
const mapDispatchToProps = (dispatch)=>{
    return{
        // tạo ra prop component là funtion => đưa dữ liệu lên store 
        themGioHang:(sanPham)=>{
            const spGioHang ={
                maSP:sanPham.maSP,
                tenSP:sanPham.tenSP,
                giaBan:sanPham.giaBan,
                soLuong:1,
                hinhAnh:sanPham.hinhAnh
            }
            // Tạo action đưa dữ liệu lên reducer
            const action = {
                type:'THEM_GIO_HANG',
                spGioHang:spGioHang
            }
            console.log(action)

            //Dùng hàm dispact đưa dữ liệu action lên reducer
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(SanPhamRedux)