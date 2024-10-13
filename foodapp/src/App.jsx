import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerComponent from "./components/InnerComponent";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerComponent>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerComponent>
        <InnerComponent>
          <FoodDetails foodId={foodId} />
        </InnerComponent>
      </Container>
    </div>
  );
}

export default App;
