import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";
import Dashboar from "./pages/Dashboar";
import StoreItem from "./pages/StoreItem";
import "./App.css";

export const CartContext = createContext(null);

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };
  return (
    <CartContext.Provider
      value={{ cartCount, setCartCount, hamburgerIsOpen, toggleHamburger }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Dashboar />} />
              <Route path="store" element={<Store />} />
              <Route path="store/:itemId" element={<StoreItem />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
