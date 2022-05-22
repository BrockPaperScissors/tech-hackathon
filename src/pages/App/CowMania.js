import FoodBar from "../../components/FoodBar/FoodBar";
import { Link } from "react-router-dom";
import GameContainer from "../../components/GameContainer/GameContainer";
import Dashboard from '../../components/Dashboard/Dashboard';
import "./CowMania.css";

export default function CowMania() {
	function instructionClickHandler() {
		const gameInstructionDiv = document.getElementById("game-instruction");
		gameInstructionDiv.classList.toggle('active');
	}

	return (
		<>
			<div className="cowmania-page">
				<div className="cowmania-container">
					<header className="cowmania-header">
						<h1 className="cowmania-title">Cow Mania</h1>
					</header>
					<Link to="/">
						<div className="cowmania-back-container">
							<img
								src="https://i.imgur.com/c25HT0Z.png"
								alt="Back Button"
								className="cowmania-back-button"
							></img>
							<p>Go Back</p>
						</div>
					</Link>
					<div className="cowmania-gamecontainer">
						<GameContainer />
						<FoodBar />
					</div>
					<footer className="cowmania-footer">
						<img
							src="https://i.imgur.com/8cx0k2k.png"
							alt="Cow"
							className="cowmania-cow"
						></img>
						<img
							src="https://i.imgur.com/87Hh9up.png"
							alt="Hay"
							className="cowmania-hay"
						></img>
					</footer>
					{/* <Dashboard /> */}
					<div id="game-instruction-container"  onClick={instructionClickHandler}>
						<div id="question-mark">
							?
						</div>
						<img id="game-instruction" src="https://i.imgur.com/RPuyzei.png"></img>
					</div>
				</div>
			</div>
		</>
	);
}
