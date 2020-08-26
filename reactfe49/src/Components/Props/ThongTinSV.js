import React, { Component } from 'react'

export default class ThongTinSV extends Component {
    render() {
        return (
            <div>
                <img src ={this.props.sinhVien.hinhAnh}></img>
                <p>Tên:{this.props.sinhVien.hoTen}</p>
                 <p>Lớp{this.props.sinhVien.lop}</p>
            </div>
        )
    }
}
