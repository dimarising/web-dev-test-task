import React from 'react'
function SearchBar({placeholder}) {

  return (
    <div className="searchPannel">
      <div className="container"> 
          <div className='row justify-content-md-center'>
              <div className="col-md-auto">
              
                  <input type="text" placeholder={placeholder}/>
                
              </div>
          </div>
      </div>
    </div>
  )
}

export default SearchBar