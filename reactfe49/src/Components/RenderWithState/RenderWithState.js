import React, { Component } from 'react'

export default class RenderWithState extends Component {
    // quản lý những giá trị thay đổi giao diện
    state = {
        login : false
    }
    // Thuoc tinh
   
    userName = 'HKT';
    renderLogin = ()=>{
        if(this.state.login){
            return <p>
                Hello {this.userName}
            </p>
        }return <div>
            <button onClick ={ () =>{
                    this.handleLogin();
            }} className ='btn btn-danger'>ĐN</button>
        </div>
    }
    handleLogin = ()=> {
        this.state.login = true;
        //phương thức setstate =>
        // làm thay đổi giá trị state
        // gọi lại hàm render chạy lại
        // set state là phương thức bất đồng bồ
        
        this.setState({login:true},()=>{
            console.log(this.state.login)
        });
    }

    render() {
        return (
            <div>
                {this.renderLogin()}
            </div>
        )
    }
}
