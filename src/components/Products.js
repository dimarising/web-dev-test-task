import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class Products extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="row"> 
                    <div className="col"> 
                    <div>
                        
                        <ul className="products">
                            {this.props.products.map(product => (
                                <li key={product._id}>
                                    <div className="product">
                                        <img className="prodImg" src={product.image} alt={product.title}></img>
                                        <div className="cartText">
                                            <p>
                                                {product.title}
                                            </p>
                                            <div className="specifications">
                                                <div className="capacity">Pojemność (kg): <b>{product.capacity}</b></div>
                                                <div className="dimensions">Wymiary(GxSxW): <b>{product.dimensions} </b></div>
                                                <div className="features">Funkcje: <b>{product.features +" "}</b></div>
                                                
                                                <div className="energyClass_img">
                                                    <p>Klasa energetyczna </p>
                                                    <img className="energyClass_img" src={product.energyClass_img} alt={product.energyClass}></img>
                                                </div>

                                            </div>
                                            <div className="priceIsValid">Cena obowiązuje: {product.priceIsValid}</div>
                                            <div className="price">
                                                {product.price} zł
                                            </div>
                                            <div className="installments"> {product.installments}</div>
                                        </div>
                                        <button className="buttonСhoose">
                                            WYBIERZ
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        )
    }
}
