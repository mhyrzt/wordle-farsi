import React from "react";
import "./style.scss";

interface props {
	wrong?: boolean;
	correct?: boolean;
	position?: boolean;
}

const Letter: React.FC<props> = ({ wrong, correct, position, children }) => {
	const classNames = [
		"letter",
		correct ? "correct" : "",
		position ? "position" : "",
		wrong ? "wrong" : "",
	].join(" ");
	return <div className={classNames}>{children}</div>;
};

export default Letter;
