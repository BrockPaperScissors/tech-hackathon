import "./FoodBar.css";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../pages/App/App";

export default function FoodBar() {
	const [food, setFood] = useState("");

	const { farmFood, setWinCondition } = useContext(SessionContext);

	useEffect(() => {
		// If winCondition(true) modal from RewardModal replaces the GameContainer elements on the screen
		if (farmFood === 100) {
			setWinCondition(true);
		}
		// Created a conditional to check if the food bar is empty, was getting a weird line rendered because of the CSS border setting. Removing the class if it is empty, and applying the class only when the bars height > 0 solves this.
		if (farmFood === 0) {
			setFood("");
		} else {
			setFood("food-bar");
		}
	}, [farmFood]);
	return (
		<>
			{/* gray div holds food bar and h3 element */}
			<div className="food-bar-controller">
				{/* Holds the empty white div */}
				<div className="food-bar-container">
					{/* holds the colored div */}
					<div className="food-bar-background">
						{/* is the actual colored div */}
						<div className={`${food}`} style={{ height: `${farmFood}%` }}></div>
					</div>
					<h3 className="food">Food</h3>
				</div>
			</div>
		</>
	);
}
