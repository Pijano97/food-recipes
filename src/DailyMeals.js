import { useState } from "react";
import MealList from "./MealList";
import "./DailyMeals.css";
import { useHistory } from "react-router-dom";

function DailyMeals() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);
	const [vegetarian, setVegetarian] = useState("");
	const [showForm, setShowForm] = useState(true);

	const history = useHistory();

	const API_KEY = "2ca266874cb241bcaf9544623b9f360f";

	const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalores=${calories}&diet=${vegetarian}`;

	const onChange = (e) => {
		setCalories(e.target.value);
	};

	const getMealData = (e) => {
		e.preventDefault();

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setMealData(data);
				console.log(data);
				setShowForm(false);
			})
			.catch(() => {
				console.log("error");
			});
	};

	const checkBoxChange = (e) => {
		setVegetarian("Vegetarian");
	};

	return (
		<div className="dailyMeals">
			{showForm ? (
				<div className="dailyMeals__left">
					<form className="dailyMeals__search" onSubmit={getMealData}>
						<input
							type="text"
							placeholder="Calories (2000)"
							autoComplete="off"
							onChange={onChange}
							value={calories}
						/>
						<div className="dailyMeals__vegetarian">
							<label for="vegetarian">Vegetarian</label>
							<input
								name="vegetarian"
								type="checkbox"
								onChange={checkBoxChange}
							/>
						</div>
						<button className="dailyMeals__submit" type="submit">
							Get Daily Meal Plan
						</button>
					</form>
				</div>
			) : (
				""
			)}
			{mealData && <MealList mealData={mealData} />}
		</div>
	);
}

export default DailyMeals;
