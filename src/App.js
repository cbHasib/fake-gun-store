import { useState } from "react";
import "./App.css";
import AllGuns from "./components/AllGuns/AllGuns";
import Header from "./components/Header/Header";

function App() {

  const [cartCount, setCartCount] = useState(0);
  const cartIncrease = () => setCartCount(cartCount+1);

  const [initPrice, setTotalPrice] = useState(0);
  const totalPrice = (newPrice) => setTotalPrice(initPrice + newPrice);



  return (
    <div className="App">
      <Header cartCount={cartCount} price={initPrice}/>
      <AllGuns cartIncrease={cartIncrease} totalPrice={totalPrice}/>
    </div>
  );
}

export default App;
