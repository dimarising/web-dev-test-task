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
      capacity:""
    };
  }

  sortProducts = (event) => {

    const sort= event.target.value;
    console.log(event.target.value);
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
  };

  filterProducts = (event) => {

    console.log(event.target.value);
    if(event.target.value === data.products.function){
        console.log("yes");
      // this.setState({function: event.target.value, product: data.products});
    }else{
      console.log("no");
      // this.setState({
      //   functions: event.target.value,
      //   products: data.products.filter(
      //     (product) => product.functions.indexOf(event.target.value) >= 0
      //   ),
      // })
    }
  }

  searchProducts = (event) => {
    console.log(event.target.value);

  }

  render() {
    return (
      <div className="gridContainer">
        <header> <p>Wybierz urządzenie</p> </header>
        <main>
          <div className="content">
            <div className="main">
              <SearchBar placeholder="Search...">
              </SearchBar>
              <Filter count={this.state.products.length}
              sort={this.state.sort}
              functions={this.state.functions}
              enClass={this.state.enClass}
              capacity={this.state.capacity}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}>

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
