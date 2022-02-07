import React from "react";
import Word from "../Word";
import "./styles.scss";

interface ContainerPops {
	current: number;
	words: Array<string>;
	correct: string;
}

const Container: React.FC<ContainerPops> = ({ words, correct, current }) => {
	return (
		<div className="container">
			{words.map((word, idx) => {
				if (idx > 5) return;
				return (
					<Word
						word={word}
						correct={correct}
						key={idx}
						typing={current <= idx}
					/>
				);
			})}
		</div>
	);
};

export default Container;
