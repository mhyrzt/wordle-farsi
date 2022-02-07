import React from "react";
import Container from "./Components/Container";
import { getRandomWord } from "./Utils";
const EMPTY = " ".repeat(5);

function App() {
	const [words, setWords] = React.useState<Array<string>>([
		EMPTY,
		EMPTY,
		EMPTY,
		EMPTY,
		EMPTY,
	]);
	const [fa, setFa] = React.useState<boolean>(false);
	const [current, setCurrent] = React.useState<number>(2);
	const correct = getRandomWord();
	console.log(correct);

	function keydown({ key }: KeyboardEvent) {
		let word = words[current].trim();
		if (word.length === 5) {
			return;
		}
		if (64 < key.charCodeAt(0) && key.charCodeAt(0) < 123) {
			return;
		}
		if (47 < key.charCodeAt(0) && key.charCodeAt(0) < 58) {
			return;
		}
		if (key === "Backspace") {
			word = word.slice(0, -1);
		} else {
			word = word + key;
		}
		console.log(word);
		words[current] = word;
		setWords(words);
	}

	React.useEffect(() => {
		document.getElementById("root").addEventListener("keydown", keydown);

		return () => {
			document.removeEventListener("keydown", keydown, true);
		};
	}, []);

	React.useEffect(() => {
		console.log(words);
	}, [words]);

	return (
		<div>
			<Container current={current} words={words} correct={correct} />
			<hr />
		</div>
	);
}

export default App;
