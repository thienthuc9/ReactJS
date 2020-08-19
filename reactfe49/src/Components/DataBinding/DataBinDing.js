import React, { Component } from 'react'

export default class DataBinDing extends Component {
    product ={
        id:1,
        name:'ipX',
        price:1000
    }
    renderCard =()=>{
        return    <div className="card text-left">
        <img className="card-img-top" src="holder.js/100px180/" alt="" />
        <div className="card-body">
          <h4 className="card-title">{this.product.name}</h4>
          <p className="card-text">Body</p>
        </div>
      </div>
      
    }
    render() {
      
        //Bindding data
        let title = 'hello frontend 49';
        let photo ='https://media3.scdn.vn/img3/2019/3_8/oCcMTy_simg_de2fe0_500x500_maxb.jpg';
        //Bindding funtion
        let renderImg = ()=>{

            return <img src='https://media3.scdn.vn/img3/2019/3_8/oCcMTy_simg_de2fe0_500x500_maxb.jpg'/>
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img s src={photo}></img>
                <div>
                    {renderImg()}
                </div>
                <div>
                    {this.renderCard()}
                </div>
                <div>
                    {this.product.price}
                </div>
            </div>
        )
    }
}
