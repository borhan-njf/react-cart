import React from "react";
//react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";
//components
import Navbar from "./components/shared/Navbar";
import Store from "./components/Store";
import ProductDetail from "./components/ProductDetail";
import ShopCart from "./components/ShopCart";
//context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/products" element={<Store />}></Route>
            <Route
              path="*"
              element={<Navigate to="/products" replace />}
            ></Route>
            <Route path="/cart" element={<ShopCart />}></Route>
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
