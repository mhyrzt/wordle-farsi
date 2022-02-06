import React from "react";
import "./style.scss";

interface props {
	letter: string;
}

const Letter: React.FC<props> = ({ letter }) => {
	return <div className="leter">{letter}</div>;
};

export default Letter;
