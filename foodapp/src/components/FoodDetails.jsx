import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "dad1519937e5428ebe84f006da9bae3b";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
    }
    fetchFood();
  }, [foodId]);
  const price = Number(food.pricePerServing) / 100;
  return (
    <div>
      <div>
        Food Details {foodId}
        {food.title}
        <img src={food.image} />
      </div>
      <strong>
        <span> {food.readyInMinutes} Minutes</span>
      </strong>
      <span>
        👨‍👩‍👧‍👦 <strong>Serves: {food.servings}</strong>
      </span>
      <span>{food.vegeterian ? "🥕vegeterian" : "🍗 Non-vegeterian"} </span>
      <span> {food.vegan ? "🐮vegan" : ""} </span>
      <span>${price.toFixed(2)} Per Serving</span>
    </div>
  );
}
