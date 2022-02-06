import { words } from "../Data/words.json";

function getRandomWord(): string {
	const idx: number = Math.floor(Math.random() * words.length);
	return words[idx];
}

export { getRandomWord };
