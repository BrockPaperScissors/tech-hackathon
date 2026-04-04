import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<div className="home-container">
				<header className="home-header">
					<div className="home-title-image-container">
						<img
							src="https://i.imgur.com/VDvm14J.png"
							alt="Red Barn"
							className="home-title-image"
						></img>
					</div>
					<div className="home-title-container">
						<h1 className="home-title">Build-a-Farm</h1>
						<h3 className="home-sub">Play math games. Collect farm animals.</h3>
					</div>

					<div className="home-sign-block">
						<img
							src="https://i.imgur.com/v612Qmq.png"
							alt="Account Icon"
							className="home-sign-icon"
						></img>
						<div className=" home-sign-container">
							<p className="home-sign-in">Sign In</p>
							<p> / </p>
							<p className="home-sign-up">Sign Up</p>
						</div>
					</div>
				</header>
				<nav className="home-nav-container">
					<div className="home-grade-container">
						<Link to="/kinder">
							<div className="home-grade-button">
								<button className="button bk">K</button>
								<p>Kinder</p>
							</div>
						</Link>
						<Link to="/firstgrade">
							<div className="home-grade-button">
								<button className="button b1">1</button>
								<p>1st Grade</p>
							</div>
						</Link>
						<Link to="/secondgrade">
							<div className="home-grade-button">
								<button className="button b2">2</button>
								<p>2nd Grade</p>
							</div>
						</Link>
						<Link to="/thirdgrade">
							<div className="home-grade-button">
								<button className="button b3">3</button>
								<p>3rd Grade</p>
							</div>
						</Link>
						<Link to="/fourthgrade">
							<div className="home-grade-button">
								<button className="button b4">4</button>
								<p>4th Grade</p>
							</div>
						</Link>
						<Link to="/fifthgrade">
							<div className="home-grade-button">
								<button className="button b5">5</button>
								<p className="home-grade-p">5th Grade</p>
							</div>
						</Link>
						<Link to="/sixthgrade">
							<div className="home-grade-button">
								<button className="button b6">6</button>
								<p>6th Grade</p>
							</div>
						</Link>
					</div>
					<div className="home-subject-container">
						<Link to="/wordproblems">
							<button className="home-subject-button">Word Problems</button>
						</Link>
						<Link to="/addition">
							<button className="home-subject-button">Addition</button>
						</Link>
						<Link to="/subtraction">
							<button className="home-subject-button">Subtraction</button>
						</Link>
						<Link to="/multiplication">
							<button className="home-subject-button">Multiplication</button>
						</Link>
						<Link to="/division">
							<button className="home-subject-button">Division</button>
						</Link>
						<Link to="/fractions">
							<button className="home-subject-button">Fractions</button>
						</Link>
						<Link to="/ratios">
							<button className="home-subject-button">Ratios</button>
						</Link>
					</div>
				</nav>
				<main className="home-main-container">
					<div className="home-hero-container">
						<div className="home-hero-title-container">
							<h2 className="home-hero-title">Cow Mania</h2>
							<p className="home-hero-description">
								Complete addition problems to feed the cow and add it to your
								farm!
							</p>
						</div>
						<Link to="/gamedetails">
							<button className="home-button-play">Play</button>
						</Link>
					</div>
					<Link to="/gamedetails">
						<img
							src="https://i.imgur.com/SdgaoE0.png"
							alt="Cow Mania"
							className="home-hero-image"
						/>
					</Link>
				</main>
				<footer className="home-footer-container">
					<Link to="/chickencount">
						<div className="home-footer-game">
							<img
								src="https://i.imgur.com/sCAiNJ7.png"
								alt="Chicken Count"
								className="home-footer-game-image"
							/>
							<p className="home-footer-game-description">Chicken Count</p>
						</div>
					</Link>
					<Link to="/pigsinablanket">
						<div className="home-footer-game">
							<img
								src="https://i.imgur.com/zYJxhH1.png"
								alt="Pigs in a Blanket"
								className="home-footer-game-image"
							/>
							<p className="home-footer-game-description">Pigs in a Blanket</p>
						</div>
					</Link>
					<Link to="/horseroundup">
						<div className="home-footer-game">
							<img
								src="https://i.imgur.com/UZjiHLR.png"
								alt="Horse Roundup"
								className="home-footer-game-image"
							/>
							<p className="home-footer-game-description">Horse Roundup</p>
						</div>
					</Link>
					<Link to="/sleepysheep">
						<div className="home-footer-game">
							<img
								src="https://i.imgur.com/B3efP9p.png"
								alt="Sleepy Sheep"
								className="home-footer-game-image"
							/>
							<p className="home-footer-game-description">Sleepy Sheep</p>
						</div>
					</Link>
				</footer>
			</div>
		</>
	);
}
