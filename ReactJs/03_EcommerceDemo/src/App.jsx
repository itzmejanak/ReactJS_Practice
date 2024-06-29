import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Product";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Card from "./components/Card";
import "./index.css";
import Login from './LoginSignup/login/Login.jsx';
import Signup from './LoginSignup/signUp/Signup.jsx';
import Profile from "./Profile/Profile.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/" element={
          <>
            <Sidebar handleChange={handleChange} />
            <Navigation query={query} handleInputChange={handleInputChange} />
            <Recommended handleClick={handleClick} />
            <Products result={result} />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
