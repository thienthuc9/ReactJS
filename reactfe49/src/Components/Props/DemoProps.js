import React, { Component } from 'react'
import ThongTinSV from './ThongTinSV'

export default class DemoProps extends Component {
    sinhVien ={
        hoTen: 'thien',
        lop:'Fe49',
        hinhAnh:'https://api.adorable.io/avatars/152/hi'
    }
    render() {
        return (
            <div>
                <ThongTinSV sinhVien={this.sinhVien}></ThongTinSV>
            </div>
        )
    }
}
