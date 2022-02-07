import React from "react";
import Container from "./Components/Container";
import GameStatus from "./Components/GameStatus";
import CustomKeyboard from "./Components/CustomKeyboard";
import { getRandomWord, getFaKey } from "./Utils";
import "./App.css";

const EMPTY = " ".repeat(5);
const EMPTY_ARR = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];

function App() {
	const [words, setWords] = React.useState<Array<string>>(EMPTY_ARR);
	const [word, setWord] = React.useState<string>("");
	const [error, setError] = React.useState<string>("");
	const [current, setCurrent] = React.useState<number>(0);
	const [correct, setCorrect] = React.useState<string>(getRandomWord());
	const [gameover, setGameover] = React.useState<boolean>(false);

	function updateWords(): void {
		setWords((prev) => {
			const new_words = [...prev];
			new_words[current] = word + " ".repeat(5 - word.length);
			return new_words;
		});
	}

	function handleEnterChar(chr: string) {
		if (gameover) {
			return;
		}

		if (!chr) {
			setError("فارسی بنویس :(");
		}
		if (word.length === 5) {
			if (chr === "Enter" || chr === "{enter}") {
				if (word === correct) {
					setGameover(true);
				}
				setCurrent((c) => (c < words.length ? c + 1 : c));
				setWord("");
			}
			return;
		}
		if (chr === "Enter" || chr === "{enter}") {
			return;
		}

		if (chr === "Backspace" || chr === "{bksp}") {
			return setWord((w) => w.slice(0, -1));
		}

		setWord((w) => w + chr);
	}

	function handleReset() {
		setWords(EMPTY_ARR);
		setWord("");
		setError("");
		setCurrent(0);
		setCorrect(getRandomWord());
		setGameover(false);
	}

	const keydown = React.useCallback(
		(event: KeyboardEvent) => handleEnterChar(getFaKey(event)),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[word, gameover]
	);

	React.useEffect(() => {
		document.addEventListener("keydown", keydown);

		return () => {
			document.removeEventListener("keydown", keydown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [keydown]);

	React.useEffect(() => {
		updateWords();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [word]);

	React.useEffect(() => {
		setGameover(current === 6);
	}, [current]);

	return (
		<div>
			<h1>{"کلمعه |‌  وردل فارسی"}</h1>
			<Container current={current} words={words} correct={correct} />
			<GameStatus
				error={error}
				gameover={gameover}
				onClick={handleReset}
				correct={correct}
			/>
			<CustomKeyboard onKeyPress={handleEnterChar} />
		</div>
	);
}

export default App;
