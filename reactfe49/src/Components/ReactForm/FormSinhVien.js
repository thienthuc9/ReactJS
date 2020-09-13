import React, { Component } from 'react'
import DanhSachSinhVien from './DanhSachSinhVien'
import {connect} from 'react-redux'
import swal from 'sweetalert2'
import {themSinhVienAction} from '../../redux/Action/QuanLiSinhVienAction'
 class FormSinhVien extends Component {
    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        }

    }
    handleChangeInput = (event) => {
        let { value, name } = event.target
        let type = event.target.getAttribute('type_');
        let newValues = { ...this.state.values, [name]: value };
        let newErrors = { ...this.state.errors, [name]: value.trim() === '' ? `${name} không được bỏ troonhs !` : '' };
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(type ==='email'){
            if(!regexEmail.test(value)){
                newErrors[name]='Email Không hợp lệ'
            }
        }
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();// chặn sự kiện submit của trình duyệt
        let valid = true;

        for (let key in this.state.values){
            if(this.state.values){
                if(this.state.values[key].trim()===''){
                    valid = false;
                }
            }
        }
        for (let key in this.state.errors){
                if(this.state.errors[key].trim()!==''){
                    valid = false;
                }
            
        }
        // for (let key in this.state.value){
        //     if(this.state.values){
        //         if(this.state.values[key].trim()===''){
        //             valid = false;
        //         }
        //     }
        // }
        const action = themSinhVienAction(this.state.values)
        if(!valid){
            swal.fire(
                '',
                'Dữ Liệu chưa được nhập',
                'error'
              )
            return
        }
        
        // const action ={
        //     type:'THEM_SV',
        //     sinhVien:this.state.values
            
        // }
        this.props.dispatch(action);
        swal.fire(
            '',
            'Dữ Liệu đã được thêm',
            'success'
          )
        return
    }
    render() {


        return (
            <div className='container-fluid'>
                <div className="card text-left">
                    <div className="card-header bg-dark text-white">
                        Thông Tin sinh viên
                    </div>

                    <div className="card-body">
                        <div className='row'>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Mã Sinh Viên</p>
                                    <input className='form-control' name='maSinhVien' onChange={this.handleChangeInput}></input>
                                    <p className='text-danger'>{this.state.errors.maSinhVien}</p>


                                </div>
                                <div className='form-group'>
                                    <p>Tên Sinh Viên</p>
                                    <input className='form-control' name='tenSinhVien' onChange={this.handleChangeInput}></input>
                                    <p className='text-danger'>{this.state.errors.tenSinhVien}</p>
                                </div>

                            </div>
                            <div className='col-6'>
                                <div className='form-group'>
                                    <p>Email</p>
                                    <input type_='email' className='form-control' name='email' onChange={this.handleChangeInput}></input>
                                    <p className='text-danger'>{this.state.errors.email}</p>
                                </div>
                                <div className='form-group'>
                                    <p>SĐT</p>
                                    <input  className='form-control' name='soDienThoai' onChange={this.handleChangeInput}></input>
                                    <p className='text-danger'>{this.state.errors.soDienThoai}</p>
                                </div>

                                <div className='row'>
                                    <div className='col-12 text-right'>
                                        <button className='btn btn-success' type='submit' onClick={this.handleSubmit}>Thêm sinh viên</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        )
    }
}

export default connect(null)(FormSinhVien)
