import words from "../Data/words.json";

const WORDS = words.words.filter(w => w.trim().length === 5);

function getRandomWord(): string {
	const idx: number = Math.floor(Math.random() * WORDS.length);
	return WORDS[idx];
}

export { getRandomWord };
