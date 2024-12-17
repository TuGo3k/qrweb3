import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";
import { useState } from "react";
function App() {
  const categories = [
    {
      title: "Sushi",
      foods: [
        {
          title: "Sushi Tit2le",
          description:
            "This is a mouth-watering sushi roll with fresh salmon, avocado, and crispy seaweed. Served with soy sauce and wasabi.",
          ingredients: [
            "Fresh Salmon",
            "Avocado",
            "Seaweed",
            "Rice",
            "Soy Sauce",
            "Wasabi",
          ],
          img: "/sushi1.png",
          rate: "5",
          price: "28",
          index: 0,
        },
        { title: "Sushi Title", img: "/sushi2.png", rate: "4", price: "28" },
        { title: "Sushi Title", img: "/sushi3.png", rate: "4", price: "28" },
        { title: "Sushi Title", img: "/sushi4.png", rate: "4", price: "28" },
      ],
      index: 0,
    },
    {
      title: "Pizza",
      foods: [
        { title: "Pizza Title", img: "/pizza1.png", rate: "4", price: "28" },
        { title: "Pizza Title", img: "/pizza2.png", rate: "4", price: "28" },
        { title: "Pizza Title", img: "/pizza3.png", rate: "4", price: "28" },
        { title: "Pizza Title", img: "/pizza4.png", rate: "4", price: "28" },
      ],
      index: 1,
    },
    {
      title: "Food",
      foods: [
        { title: "Food Title", img: "/food1.png", rate: "4", price: "28" },
        { title: "Food Title", img: "/food2.png", rate: "4", price: "28" },
        { title: "Food Title", img: "/food3.png", rate: "4", price: "28" },
        { title: "Food Title", img: "/food4.png", rate: "4", price: "28" },
      ],
      index: 2,
    },
    {
      title: "Drink",
      index: 3,
    },
  ];

  const foods = [
    { title: "Drink Title", img: "/drink1.png", rate: "4", price: "28" },
    { title: "Drink Title", img: "/drink2.png", rate: "4", price: "28" },
    { title: "Drink Title", img: "/drink3.png", rate: "4", price: "28" },
    { title: "Drink Title", img: "/drink4.png", rate: "4", price: "28" },
  ];

  const [catchIndex, setCatchIndex] = useState([]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home categories={categories} setCatchIndex={setCatchIndex} />
          }
        />
        <Route
          path="/detail/:catname/:id"
          element={<FoodDetail foods={categories} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
