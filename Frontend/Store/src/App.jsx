import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Body from "./components/body";
import BottleTab from "./components/bottleTab";
import CapTab from "./components/capTab";
import CartTab from "./components/cartTab";
import ContactMe from "./components/contact_me.jsx";
import HoodieTab from "./components/hoodieTab";
import Layout from "./components/layout";
import NotFound from "./components/notFound";
import PrivacyPolicy from "./components/privacy_policy.jsx";
import ProductDetail from "./components/productDetail";
import Return_FAQ from "./components/reutns_faq.jsx";
import SweatshirtTab from "./components/sweatshirtTab";
import Terms_of_Service from "./components/tos.jsx";

function App() {

  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = sessionStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });
  const [newItemAdded, setNewItemAdded] = useState(false);

  const addToCart = (item) => {

    const existingItem = cartItems.find(cartItems => cartItems.title == item.title && 
                                        cartItems.color == item.color &&
                                        cartItems.size == item.size);
    if(existingItem){
      const index = cartItems.findIndex(cartItems => cartItems.title == item.title && 
                                  cartItems.color == item.color &&
                                  cartItems.size == item.size);
      cartItems[index].quantity = item.quantity;
      // console.log(index);
      // console.log(cartItems[index])
      // console.log(cartItems);
    } else {
      setCartItems([...cartItems, item]);
      setNewItemAdded(true);
    }
  }

  useEffect(() => {
    console.log(cartItems);
    console.log('Storing to sessionStorage:', cartItems);
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const openCart = () => {
    console.log('Cart: ' + cartItems);
    setNewItemAdded(false);
  }

  return (
    <Router>
      <Routes>
        {/* Wrap all paths inside the Layout route */}
        <Route path="/" element={<Layout openCart={openCart} newItemAdded={newItemAdded}/>}>
          <Route index element={<Body CustomFilter={""}/>} />
          <Route path=":store/:title" element={<ProductDetail addToCart={addToCart} cartItems={cartItems}/>} />
          <Route path="hoodies" element={<HoodieTab />} />
          <Route path="sweatshirts" element={<SweatshirtTab />} />
          <Route path="caps" element={<CapTab />} />
          <Route path="bottles" element={<BottleTab />} />
          <Route path="cart" element={<CartTab cartItems={cartItems}/>} />
          <Route path="returns-faq" element={<Return_FAQ />} />
          <Route path="terms-of-service" element={<Terms_of_Service />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact-me" element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App
