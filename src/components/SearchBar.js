import React, { Component } from 'react'
export default class SearchBar extends Component {
  render() {
  return (
    <div className="searchPannel">
      <div className="container"> 
          <div className='row justify-content-md-center'>
              <div className="col-md-auto">
              
                  <input type="text" onChange={this.props.searchProducts.bind(this)} placeholder="Searsh..."/>
                
              </div>
          </div>
      </div>
    </div>
  )
}
}
