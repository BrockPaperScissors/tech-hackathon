import "./KeyPadDisplay.css";
import { useContext, useEffect } from "react";
import { SessionContext } from "../../pages/App/App";

export default function KeyPadDisplay({ userInput, setUserInput, num1, num2, handleEnter }) {
	const { userResult } = useContext(SessionContext);
	function handleChange(evt) {
		console.log(evt);
		// console.log(evt.nativeEvent.inputType === "deleteContentBackward")
		// console.log('value: ',evt.target.value.slice(-1))
		if (evt.nativeEvent.inputType === "deleteContentBackward") {
			setUserInput(userInput.slice(0, userInput.length - 1));
		} else if (
			parseInt(evt.target.value.slice(-1)) ||
			evt.target.value.slice(-1) === "0"
		) {
			setUserInput(userInput.concat(evt.target.value.slice(-1)));
		}
	}

	useEffect(() => {
		let resultClass = userResult;
		console.log(resultClass);
	}, [userResult]);

	return (
		<div className="display-container">
			<div>
				{num1} + {num2} =
			</div>
			<form onSubmit={handleEnter}>
				<input
					className={`${userResult} ` + "user-input"}
					value={userInput}
					onChange={handleChange}
				></input>
			</form>
		</div>
	);
}
