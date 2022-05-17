import { useState } from 'react';
import KeyPadDisplay from "../KeyPadDisplay/KeyPadDisplay";
import KeyPad from "../KeyPad/KeyPad";

export default function GameContainer() {
    const [userInput, setUserInput] = useState('')
	function handleClick(val) {
		if (val === '<-') {
			setUserInput(userInput.slice(0, userInput.length - 1))
		} else {
			setUserInput(userInput.concat(val))
		}
    }

	function handleEnter() {
		console.log(userInput);
	}

    return (
        <div>
			<KeyPadDisplay userInput={userInput} setUserInput={setUserInput} />
			<KeyPad handleClick={handleClick} handleEnter={handleEnter} />
        </div>
    )
}