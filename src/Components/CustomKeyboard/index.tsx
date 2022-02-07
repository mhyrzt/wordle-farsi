import React from "react";
import Keyboard from "react-simple-keyboard";
import { KEYBOARD_LAYOUT, KEYBOARD_DISPLAY } from "../../Utils";
import "react-simple-keyboard/build/css/index.css";
import "./styles.scss";

interface CustomKeyboardProps {
	onKeyPress: any;
}

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({ onKeyPress }) => (
	<div className="keyboard-container">
		<Keyboard
			layout={KEYBOARD_LAYOUT}
			display={KEYBOARD_DISPLAY}
			onKeyPress={onKeyPress}
		/>
	</div>
);

export default CustomKeyboard;
