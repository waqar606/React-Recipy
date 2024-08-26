import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipyID from "./components/RecipyID";
import Category from "./components/Category";
import SearchElement from "./components/SearchElement";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<RecipyID />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search/:Term" element={<SearchElement />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
