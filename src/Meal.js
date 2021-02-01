import React, { useState, useEffect } from "react";
import "./Meal.css";

function Meal({ meal }) {
	const [imageUrl, setImageUrl] = useState("");

	const API_KEY = "2ca266874cb241bcaf9544623b9f360f";

	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
		)
			.then((response) => response.json())
			.then((data) => {
				setImageUrl(data.image);
			});
		// catch eror
	}, [meal.id]);

	return (
		<div className="meal">
			<h1>{meal.title}</h1>
			<img src={imageUrl} alt="recipe" />
			<ul>
				<li>Preparation time: {meal.readyInMinutes} minutes</li>
				<li>Number of servings: {meal.servings}</li>
			</ul>

			<a href={meal.sourceUrl}>Go to Recipe</a>
		</div>
	);
}

export default Meal;
