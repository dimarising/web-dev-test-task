import React from "react";
import data from "./data.json";
import Products from "./components/Products";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products
    }
  }

  render() {
    return (
      <div className="gridContainer">
        <header> <p>Wybierz urządzenie</p> </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
          </div>
        </main>
        <footer> Footer </footer>
      </div>
    );
  }
}

export default App;
