import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import SearchBar from "./components/SearchBar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      sort:"",
      functions:"",
      enClass:"",
      capacity:"",
      search: ""
    }
  }

  sortProducts = (event) => {
    const sort= event.target.value;
    if(event.target.value === "all"){
      this.setState({sort: event.target.value, products: data.products})
    } else {
     
      this.setState((state) => ({
        sort: sort,
        products: this.state.products.slice().sort((a, b) =>
          sort === "price" ?
          a.price < b.price ? 1: -1:
          sort === "capacity"?
          a.capacity < b.capacity ? 1: -1:
          a._id > b._id ? 1 : -1
        ),
      }));
    }
  };

  filterProducts = (event) => {
      
      if(event.target.value === "all"){
        this.setState({functions: event.target.value, products: data.products})
      } else {
      this.setState({
        functions: event.target.value,
        products: data.products.filter(
          (product) => product.features.indexOf(event.target.value) >=0
        ),
      })
    }
  }

  enClassProducts = (event) => {
    if(event.target.value === "all"){
        this.setState({enClass: event.target.value, products: data.products})
      } else {
      this.setState({
        enClass: event.target.value,
        products: data.products.filter( (product) => product.energyClass === event.target.value
        ),
      })
    }
  }

  capacityProducts = (event) => {
    if(event.target.value === "all"){
      this.setState({capacity: event.target.value, products: data.products})
    } else {
    this.setState({
      capacity: event.target.value,
      products: data.products.filter( (product) => product.capacity == event.target.value.replace(/[^0-9]/g, '')
      ),
    })
  }
}


  searchProducts = (event) => {
    this.setState({
      search: event.target.value,  
      products: data.products.filter( (product) => product.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >=0
      ),
    })
  }

  render() {
    return (
      <div className="gridContainer">
        <header> <p>Wybierz urządzenie</p> </header>
        <main>
          <div className="content">
            <div className="main">
              <SearchBar 
             searchProducts={this.searchProducts}
              >
              </SearchBar>
              <Filter count={this.state.products.length}
              sort={this.state.sort}
              functions={this.state.functions}
              enClass={this.state.enClass}
              capacity={this.state.capacity}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              enClassProducts={this.enClassProducts}
              capacityProducts={this.capacityProducts}
              >
              

              </Filter> 
              <Products products={this.state.products}></Products>
            </div>
          </div>
        </main>
        <footer> </footer>
      </div>
    );
  }
}

export default App;
