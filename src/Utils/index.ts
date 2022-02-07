import words from "../Data/words.json";

const WORDS = words.words;

function getRandomWord(): string {
	const idx: number = Math.floor(Math.random() * WORDS.length);
	return WORDS[idx];
}

function getFaKey({ key }: KeyboardEvent): string {
	const SPECIALS = ["Backspace", "Enter"];

	if (SPECIALS.includes(key)) {
		return key;
	}

	if (64 < key.charCodeAt(0) && key.charCodeAt(0) < 123) {
		// ENGLISH KEYS
		return "";
	}
	if (47 < key.charCodeAt(0) && key.charCodeAt(0) < 58) {
		// NUMBERS
		return "";
	}
	if (key === " ") {
		// WHITESPACE
		return "";
	}

	return key;
}

const KEYBOARD_LAYOUT = {
	default: [
		"ض ص ث ق ف غ ع ه خ ح ج چ {bksp}",
		"ش س ی ب ل ا ت ن م ک گ پ {enter}",
		"ظ ط ز ر ذ د ئ و",
	],
};

const KEYBOARD_DISPLAY = {
	'{bksp}': "←"
}

export { getRandomWord, getFaKey, WORDS, KEYBOARD_LAYOUT };
