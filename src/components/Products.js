import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
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
                                        <div className="capacity">Pojemność (kg): {product.capacity}</div>
                                        <div className="dimensions">Wymiary(GxSxW): {product.dimensions}</div>
                                        <div className="features">Funkcje: {product.features}</div>
                                        
                                        <div className="energyClass">
                                            <p>Klasa energetyczna </p>
                                            <img className="energyClass" src={product.energyClass} alt={product.energyClass}></img>
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
        )
    }
}
