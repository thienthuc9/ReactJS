import React, { Component } from 'react'
import data from './DataFilms.json'
// import './phim.css'
export default class BaiTapRenderPhim extends Component {
    renderfilms = () => {
        return data.map((film, index) => {
            return <div className='col-2' key={index}>
                <div className="card text-left" style={{ width: 230 }}>
                    <img className="card-img-top" src={film.hinhAnh} style={{ height: 300 }} />
                    <div className="card-body">
                        <h4 style={{height:50}} className="card-title">{film.tenPhim.length > 15 ? <span>{film.tenPhim.substr(0, 15)}...</span> : <span>{film.tenPhim}</span>}</h4>
                        <p style={{height:75}} className="card-text">{film.moTa.length > 50 ? <span>{film.moTa.substr(0, 50)}...</span> : <span>{film.moTa}</span>}</p>
                    </div>
                </div>

            </div>
        })
    }
    render() {
        return (
            <div className='bg' style={{ backgroundImage: 'url("./img/avanger.jpg")', backgroundSize: 'cover', minheight: '100vh' }}>
                <div style={{ width: '100%', minheight: '100vh', backgroundColor: 'rgba(0,0,0,.5)' }}>
                    <nav style={{ backgroundColor: 'rgba(112,225,95,.5)' }} className="navbar navbar-expand-lg ">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className='row'>
                        {this.renderfilms()}
                    </div>
                </div>
            </div>
        )
    }
}
