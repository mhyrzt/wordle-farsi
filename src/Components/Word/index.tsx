import React from "react";
import Letter from "../Letter";

import "./styles.scss";

interface WordProps {
	word: string;
	correct: string;
	typing?: boolean;
}

interface Stats {
	wrong?: boolean;
	correct?: boolean;
	position?: boolean;
}

function getPositions(word: string, letter: string): Array<number> {
	const positions: Array<number> = [];

	let idx = 0;
	while (true) {
		idx = word.indexOf(letter, idx);
		if (idx === -1) break;
		positions.push(idx++);
	}

	return positions;
}

const Word: React.FC<WordProps> = ({ word, correct, typing }) => {
	function getStats(letter: string, idx: number): Stats {
		const stats: Stats = {};

		if (typing) return stats;

		if (!correct.includes(letter)) {
			stats.wrong = true;
			return stats;
		}

		const positions = getPositions(word, letter);
		if (positions.includes(idx) && word[idx] === correct[idx]) {
			stats.correct = true;
			return stats;
		} else {
			stats.position = true;
			return stats;
		}

		return stats;
	}

	return (
		<div className="word">
			{word
				.split("")
				.reverse()
				.map((letter, idx) => {
					const stats = getStats(letter, word.length - idx - 1);
					return (
						<Letter key={idx} {...stats}>
							{letter}
						</Letter>
					);
				})}
		</div>
	);
};

export default Word;
