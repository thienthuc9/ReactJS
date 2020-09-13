import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import {connect} from 'react-redux'
import QLSinhVienReducer from '../../redux/QLSinhVienReducer'
 class DanhSachSinhVien extends Component {

    renderSV =()=>{
        return this.props.mangSinhVien.map((sv,index)=>{
            return <tr key={index}>
                <td>{sv.maSinhVien}</td>
                <td>{sv.tenSinhVien}</td>
                <td>{sv.email}</td>
                <td>{sv.soDienThoai}</td>
                <td>
                    <button className='btn btn-danger mr-2'>Xóa</button>
                    <button className='btn btn-primary'>Sửa</button>
                </td>
               
            </tr>
        })

        }
    
    render() {
        return (
            <div>
                <FormSinhVien></FormSinhVien>
                <table className="table " >
                    <thead className="table bg-dark text-white">
                        <tr>
                            <th>Mã Sinh Viên</th>
                            <th>Tên Sinh Viên</th>
                            <th>Email</th>
                            <th>Số Điên Thoại</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSV()}
                        
                    </tbody>
                </table>

            </div>
        )
    }
}
const mapStateToProps = (state) => { //state là giá trị từ rootreducer truyền vào component
    return {
       mangSinhVien :state.QLSinhVienReducer.mangSinhVien
    }
}
export default connect(mapStateToProps)(DanhSachSinhVien)