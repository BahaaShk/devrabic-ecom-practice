import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Store from "./pages/store";
import Authenticate from "./pages/authenticate";
import Cart from "./pages/cart";
import { Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebaseConfig";
import { MainContext } from "./utils/context";
import { fetchUserData, setupDBListener } from "./utils/firebaseFunctions";
import { products } from "./utils/products";

function App() {
  const [user, loading] = useAuthState(auth);
  const [cartProducts, setCartProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    user && fetchUser(user);
  }, [user]);

  useEffect(() => {
    if (!loading && user) {
      setupDBListener(user, (data) => {
        const updatedProducts = products.filter((product) => {
          return !data.some((cartProduct) => cartProduct.id === product.id);
        });
        setFilteredProducts(updatedProducts);
        setCartProducts(data);
      });
    }
  }, [loading, user]);

  const fetchUser = async () => {
    const res = await fetchUserData(user);
    if (res.success) {
      setUsername(res.data.username);
      setCartProducts(res.data.cartProducts);
    }
  };

  return (
    <>
      <MainContext.Provider value={{ user, loading, username, cartProducts, filteredProducts }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/authenticate" element={<Authenticate />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MainContext.Provider>
      {/* <Store /> */}
    </>
  );
}

export default App;
