import './GameContainer.css'
import { useState, useContext } from 'react'
import KeyPadDisplay from '../KeyPadDisplay/KeyPadDisplay'
import KeyPad from '../KeyPad/KeyPad'
import { SessionContext } from '../../pages/App/App'
import { useNavigate } from 'react-router-dom'
import RewardModal from '../RewardModal/RewardModal'

export default function GameContainer() {
  const navigate = useNavigate()
  const { setUserResult, setFarmFood, farmFood, winCondition } =
    useContext(SessionContext)
  const [userInput, setUserInput] = useState('')
  const [num1, setNum1] = useState(generateNums())
  const [num2, setNum2] = useState(generateNums())

  function generateNums() {
    return Math.floor(Math.random() * 10)
  }

  function handleClick(val) {
    if (val === '<-') {
      setUserInput(userInput.slice(0, userInput.length - 1))
    } else {
      setUserInput(userInput.concat(val))
    }
  }

	function handleEnter(evt) {
			evt.preventDefault()
		// console.log(userInput);
		// console.log(num1 + num2 === parseInt(userInput));
		if (parseInt(userInput) === num1 + num2) {
			console.log("correct");
			// setUserResult causes "Green checkmark" using CSS background image of checkmark. Applies className "check"
			setUserResult("check");
			// very brief pause before showing the user checkmark or x.
			setTimeout(correctAnswer, 500);
		} else {
			console.log("false");
			//setUserResult causes "Red X" using CSS background image of "X". Applies className "X".
			setUserResult("x");
			// very brief pause before showing the user checkmark or x.
			setTimeout(incorrectAnswer, 500);
		}
	}

  function correctAnswer() {
    // Each correct answer adds 10% to the CSS height property of the food bar. See FoodBar.js line 31, also line 12 for "full bar" condition.
    setFarmFood(farmFood + 10)
    // when the user gets the answer right, it generates a new set of numbers to add.
    setNum1(generateNums())
    setNum2(generateNums())
    // After half a second, clears the green checkmark
    setTimeout(setUserResult(), 500)
    // Resets the input box for new set of numbers.
    setUserInput('')
  }

  function incorrectAnswer() {
    // After half a second, clears the red "x"
    setTimeout(setUserResult(), 500)
  }

	return (
		<div className="game-container">
			{/* If winCondition is true, RewardModal renders and replaces KeyPad + KeyPadDisplay */}
			{winCondition ? (
				<RewardModal />
			) : (
				<>
					<KeyPad handleClick={handleClick} handleEnter={handleEnter} />
					<KeyPadDisplay
						userInput={userInput}
						setUserInput={setUserInput}
						handleEnter={handleEnter}
						num1={num1}
						num2={num2}
					/>
				</>
			)}
		</div>
	);

}
