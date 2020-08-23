import React, { Component } from 'react'
import './Styling.scss'
import Styling from './Styling.module.scss'
export default class Child extends Component {
    render() {
        return (
            <div>
            <div className={`${Styling.content}`}>
                child component
            </div>
            <div className={`${Styling.text}`}>
                child component
                
            </div>
            <p style={{borderColor:'red',background:'pink'}}>
                    hihi
            </p>
            </div>
        )
    }
}
