import React from "react";
//components
import Store from "./components/Store";
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Store />
      </ProductContextProvider>
    </div>
  );
}

export default App;
