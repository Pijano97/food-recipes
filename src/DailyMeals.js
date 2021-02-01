import { useState } from "react";
import MealList from "./MealList";
import "./DailyMeals.css";

function DailyMeals() {
	const [mealData, setMealData] = useState(null);
	const [calories, setCalories] = useState(2000);

	const API_KEY = "2ca266874cb241bcaf9544623b9f360f";

	const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalores=${calories}`;

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
			})
			.catch(() => {
				console.log("error");
			});
	};

	return (
		<div className="dailyMeals">
			<div className="dailyMeals__left">
				<form className="dailyMeals__search" onSubmit={getMealData}>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<button className="dailyMeals__submit" type="submit">
						Get Daily Meal Plan
					</button>
				</form>
			</div>
			<div className="dailyMeals__right">
				{/* <form className="dailyMeals__search" onSubmit={getMealData}>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<input
						type="text"
						placeholder="Calories (2000)"
						autoComplete="off"
						onChange={onChange}
						value={calories}
					/>
					<input type="submit" value="Get Daily Meal Plan" />
				</form> */}
			</div>
			{/* {mealData && <MealList mealData={mealData} />} */}
		</div>
	);
}

export default DailyMeals;
