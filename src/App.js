import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Bag from "./views/Bag";
import Home from "./views/Home";
import ItemPage from "./views/ItemPage";

import { BAG_ITEMS_KEY } from "./store";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state: ", state);

  React.useEffect(() => {
    fetch("http://localhost:3111/sneakers")
      .then((res) => res.json())
      .then(({ data }) => dispatch({ type: "SET_SNEAKERS", sneakers: data }));

    fetch("http://localhost:3111/add-blocks")
      .then((res) => res.json())
      .then(({ addBlocks }) => dispatch({ type: "SET_ADDBLOCKS", addblocks: addBlocks }));

    const items = localStorage.getItem(BAG_ITEMS_KEY);
    if (items === null) return;
    dispatch({ type: "SET_BAG_ITEMS", items: JSON.parse(items) });
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/item/:id" element={<ItemPage />} exact />
        <Route path="/bag" element={<Bag />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
