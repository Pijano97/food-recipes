import React from "react";
import "./NutritionRecipe.css";

function NutritionRecipe() {
	return (
		<div className="nutritionRecipe">
			<form className="app__search">
				<input type="text" placeholder="Calories (2000)" autoComplete="off" />
				<input type="submit" value="Get Daily Meal Plan" />
			</form>
		</div>
	);
}

export default NutritionRecipe;
