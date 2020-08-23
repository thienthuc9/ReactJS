import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    productlist = [
        { id: 1, name: 'IP X', price: 1000 },
        { id: 2, name: 'IP XX', price: 2000 },

        { id: 3, name: 'IP XXX', price: 3000 }


    ]
    rederProduct = () => {
        // let content = [];
        // for (let i = 0; i < this.productlist.length; i++) {
        //     let pr = this.productlist[i];
        //     let card = <div key={i} className="card text-left">
        //         <img className="card-img-top" src="holder.js/100px180/" alt />
        //         <div className="card-body">
        //             <h4 className="card-title">{pr.name}</h4>
        //             <p className="card-text">{pr.price}</p>
        //         </div>
        //     </div>
        //     content.push(card);

        // }
        let arrJS = this.productlist.map((product, index) => {
            return <div key={index} className="card text-left">
                <img className="card-img-top" src="holder.js/100px180/" alt />
                <div className="card-body">
        <h4 className="card-title">{product.name}</h4>
        <p className="card-text">{product.price}</p>
                </div>
            </div>
                
        })
        return arrJS;
    }
    render() {
        return (
            <div>
                {this.rederProduct()}
            </div>
        )
    }
}
