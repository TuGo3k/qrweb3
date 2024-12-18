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
      id: 0,
    },
    {
      title: "Pizza",
      id: 1,
    },
    {
      title: "Food",
      id: 2,
    },
    {
      title: "Drinks",
      id: 3,
    },
  ];

  const fakefoods = [
    {
      id: 0,
      title: "1rhool",
      catId: 0,
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
      rate: "4",
      price: "28",
    },
    {
      id: 1,
      title: "Sushi Title 23",
      catId: 0,

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
      rate: "4",
      price: "28",
    },
    {
      id: 2,
      title: "Beverage 1",
      catId: 3,
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
      rate: "4",
      price: "28",
    },
  ];

  const foods = [
    {
      id: 0,
      title: "Shushi",
      catId: 0,
      title: "Sushi Title",
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
      rate: "4",
      price: "28",
    },
    {
      id: 1,
      title: "Sushi Title",
      catId: 0,
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
      img: "/sushi2.png",
      rate: "4",
      price: "28",
    },
    {
      id: 2,
      title: "Sushi Title",
      catId: 0,
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
      img: "/sushi3.png",
      rate: "4",
      price: "28",
    },
    {
      id: 3,
      title: "Sushi Title",
      catId: 0,
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
      img: "/sushi4.png",
      rate: "4",
      price: "28",
    },

    {
      id: 4,
      title: "Pizza Title",
      catId: 1,
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
      img: "/pizza1.png",
      rate: "4",
      price: "28",
    },
    {
      id: 5,
      title: "Pizza Title",
      catId: 1,
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
      img: "/pizza2.png",
      rate: "4",
      price: "28",
    },
    {
      id: 6,
      title: "Pizza Title",
      catId: 1,
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
      img: "/pizza3.png",
      rate: "4",
      price: "28",
    },
    {
      id: 7,
      title: "Pizza Title",
      catId: 1,
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
      img: "/pizza4.png",
      rate: "4",
      price: "28",
    },
    {
      id: 8,
      title: "Food Title",
      catId: 2,
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
      img: "/food1.png",
      rate: "4",
      price: "28",
    },
    {
      id: 9,
      title: "Food Title",
      catId: 2,
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
      img: "/food2.png",
      rate: "4",
      price: "28",
    },
    {
      id: 10,
      title: "Food Title",
      catId: 2,
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
      img: "/food3.png",
      rate: "4",
      price: "28",
    },
    {
      id: 11,
      title: "Food Title",
      catId: 2,
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
      img: "/food4.png",
      rate: "4",
      price: "28",
    },
    {
      id: 12,
      title: "Drink Title",
      catId: 3,
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
      img: "/drink1.png",
      rate: "4",
      price: "28",
    },
    {
      id: 13,
      title: "Drink Title",
      catId: 3,
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
      img: "/drink2.png",
      rate: "4",
      price: "28",
    },
    {
      id: 14,
      title: "Drink Title",
      catId: 3,
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
      img: "/drink3.png",
      rate: "4",
      price: "28",
    },
    {
      id: 15,
      title: "Drink Title",
      catId: 3,
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
      img: "/drink4.png",
      rate: "4",
      price: "28",
    },
  ];

  const [catchIndex, setCatchIndex] = useState([]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              categories={categories}
              setCatchIndex={setCatchIndex}
              foods={foods}
            />
          }
        />
        <Route path="/detail/:id" element={<FoodDetail foods={foods} />} />
      </Routes>
    </Router>
  );
}

export default App;
