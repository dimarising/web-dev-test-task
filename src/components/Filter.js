import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default class Filter extends Component {
  render() {
    return (
        <div className="filter-block">
            <div className="container"> 
                <div className="row">
                    
                    <div className="col"> 
                        <p>Sortuj po:</p>
                    </div>
                    <div className="col"> 
                        <p>Funkcję:</p>
                    </div>
                    <div className="col"> 
                        <p>Klasa energetyczna:</p>
                    </div>
                    <div className="col"> 
                        <p>Pojemność:</p>
                    </div>
                </div>

                <div className="row"> 
                    <div className="col"> 
                        <div className="filter-sort" >
                            <select value={this.props.sort} onChange={this.props.sortProducts} >
                                <option selected disabled hidden>Popularność</option>
                                <option value="all">Wszystkie</option>
                                <option value="price">Cena</option>
                                <option value="capacity">Pojemność</option>
                            </select>
                        </div>
                    </div>
                    <div className="col"> 
                            <div className="filter-functions">
                                <select value={this.props.functions} onChange={this.props.filterProducts}>
                                    <option selected disabled hidden>Pokaż wszystkie</option>
                                    <option value="all">Wszystkie</option>
                                    <option value="door AddWash">Drzwi AddWash</option>
                                    <option value="Panel AI Control">Panel AI Control</option>
                                    <option value="Invert motor">Silnik inwertowy</option>
                                    <option value="Electronic display">Wyświetlacz elektroniczny</option>
                                </select>
                            </div>
                    </div>
                    <div className="col"> 
                            <div className="filter-enClass">
                                <select value={this.props.enClass} onChange={this.props.filterProducts}>
                                    <option selected disabled hidden>Pokaż wszystkie</option>
                                    <option value="all">Wszystkie</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                    </div>
                    <div className="col"> 
                            <div className="filter-capacity">
                                <select value={this.props.capacity} onChange={this.props.filterProducts}>
                                    <option selected disabled hidden>Pokaż wszystkie</option>
                                    <option value="all">Wszystkie</option>
                                    <option value="9kg">9kg</option>
                                    <option value="8kg">8kg</option>
                                    <option value="10kg">10kg</option>
                                </select>
                            </div>
                    </div>
                    <div className="row"> 
                        <div className="col"> 
                            <div className="filter-result">Liczba wyników: {this.props.count}</div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
  }
}
