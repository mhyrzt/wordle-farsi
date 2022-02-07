import React, { MouseEventHandler } from "react";

import "./styles.scss";

interface GameStatusProps {
	error: string;
	correct: string;
	gameover: boolean;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const GameStatus: React.FC<GameStatusProps> = ({
	error,
	correct,
	gameover,
	onClick,
}) => {
	return (
		<div className="game-status">
			<h3 className="error">{error}</h3>
			<h3 className="correct">{gameover ? correct : "-----"}</h3>
			<button onClick={onClick} className="reset">
				🔄
			</button>
		</div>
	);
};

export default GameStatus;
