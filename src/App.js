import "./App.css";
import { useState } from "react";
import MealList from "./MealList";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NutritionRecipe from "./NutritionRecipe";
import DailyMeals from "./DailyMeals";

function App() {
	// const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=3&tags=dessert`;

	return (
		<Router>
			<div className="app">
				<Header />
				<Switch>
					<Route path="/dailyMeals">
						<DailyMeals />
					</Route>
					<Route path="/nutritionRecipe">
						<NutritionRecipe />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
