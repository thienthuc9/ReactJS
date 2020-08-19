import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Product from './Product'
import Footer from './Footer'


export default class BaiTapLayout2 extends Component {
    render() {
        return (
            <body className="bg-dark">
                <Header />
                <Slider></Slider>
                <ProductList>
                    
                      
                    
                </ProductList>
                <Footer></Footer>
            </body>
        )
    }
}
