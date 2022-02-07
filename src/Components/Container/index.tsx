import React from "react";
import Word from "../Word";
import "./styles.scss";

interface ContainerPops {
	current: number;
	words: Array<string>;
	correct: string;
}

const Container: React.FC<ContainerPops> = ({ words, correct, current }) => {
	console.log(words)
    return (
		<div className="container">
			{words.map((word, idx) => (
				<Word word={word} correct={correct} key={idx} typing={current <= idx} />
			))}
		</div>
	);
};

export default Container;
