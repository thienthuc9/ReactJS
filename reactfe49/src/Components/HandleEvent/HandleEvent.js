import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert('hello')
    }
    showInfo =(name)=>{
        alert(`name:  ${name}`)
    }
    render() {
        return (
            <div className='container'>
                {/* Truyền callback funtion  */}
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.showInfo.bind(this,'Thien')}>Click me</button>

                <button onClick={() => {
                    
                    this.showInfo('HKT');
                }}>showMess</button>
            </div>
        )
    }
}
