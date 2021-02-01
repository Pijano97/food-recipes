import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__logo">
				<Link to="/">LOGO</Link>
			</div>
			<div className="header__nav">
				<Link className="header__link" to="/dailyMeals">
					Daily Meals
				</Link>
				<Link className="header__link" to="/randomRecipe">
					Random Recipe
				</Link>
				<Link className="header__link" to="/nutritionRecipe">
					Nutrition Recipe
				</Link>
				<Link className="header__link" to="/dailyMeals">
					Daily Meals
				</Link>
				<Link className="header__link" to="/dailyMeals">
					Daily Meals
				</Link>
			</div>
		</div>
	);
}

export default Header;
