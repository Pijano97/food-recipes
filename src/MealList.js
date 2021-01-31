import React from "react";
import Meal from "./Meal";
import "./MealList.css";

function MealList({ mealData }) {
	const nutrients = mealData.nutrients;

	return (
		<div className="meallist">
			<div className="mealList__nutritions">
				<h1>Macros</h1>
				<ul>
					<li>Calories: {nutrients.calories.toFixed(0)}</li>
					<li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
					<li>Fat: {nutrients.fat.toFixed(0)}</li>
					<li>Protein: {nutrients.protein.toFixed(0)}</li>
				</ul>
			</div>

			<div className="mealList__meal">
				{mealData.meals.map((meal) => {
					return <Meal key={meal.id} meal={meal} />;
				})}
			</div>
		</div>
	);
}

export default MealList;
