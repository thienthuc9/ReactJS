import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        mtp: "./img/CarBasic/products/black-car.jpg",
        name: 'lamboghini',
        price: '1500$',
        color: 'Đen'
    }
    btnBlack = () => {
        this.setState({ mtp: "./img/CarBasic/products/black-car.jpg", name: 'lamboghini',color:'Đen',price:'15000$' }, () => {

        });
    }
    btnRed = () => {
        this.setState({ mtp: "./img/CarBasic/products/red-car.jpg", name: 'ferarri',color:'Đỏ',price:'2000$' }, () => {

        });
    }
    btnSteel = () => {
        this.setState({ mtp: "./img/CarBasic/products/steel-car.jpg", name: 'mercedes',color:'Steel',price:'5000$' }, () => {

        });
    }
    btnSliver = () => {
        this.setState({ mtp: "./img/CarBasic/products/silver-car.jpg", name: 'SH',color:'Bạc',price:'500000$' }, () => {

        });
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-7'>
                            <img style={{ width: '100%' }} src={this.state.mtp}></img>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                            <th scope="col">Name</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                        <td>{this.state.name}</td>
                                        <td>{this.state.color}</td>
                                        <td>{this.state.price}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className='col-5'>
                            <div className='row'>
                                <button onClick={() => {
                                    this.btnBlack();
                                }} >
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-black.jpg"></img>

                                        </div>
                                        <div className='col-8'>
                                            Black
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='row'>
                                <button onClick={() => {
                                    this.btnSteel();
                                }}>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-steel.jpg"></img>

                                        </div>
                                        <div className='col-8'>
                                            Steel
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='row'>
                                <button onClick={() => {
                                    this.btnSliver();
                                }}>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-silver.jpg"></img>

                                        </div>
                                        <div className='col-8'>
                                            Silver
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className='row'>
                                <button onClick={() => {
                                    this.btnRed();
                                }} >
                                    <div className='row'>
                                        <div className='col-4'>
                                            <img style={{ width: '100%' }} src="./img/CarBasic/icons/icon-red.jpg"></img>

                                        </div>
                                        <div className='col-8'>
                                            Red
                                        </div>
                                    </div>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
