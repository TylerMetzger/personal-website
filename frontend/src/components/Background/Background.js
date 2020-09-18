import React from "react";
import "./Background.css";
import { useWindowSize } from "../../util/useWindowSize.js";
import trianglify from "trianglify";

const Background = (props) => {
	useWindowSize(); //just having this here reupdates the dom, so the triangles will rerender

	const picColors = [
		//'hsla(196, 29%, 13%, 1)',
		"hsla(178, 48%, 32%, 1)",
		"hsla(177, 50%, 46%, 1)",
		"hsla(177, 43%, 91%, 1)",
		//'hsla(180, 100%, 100%, 1)'
	];

	const codeColors = [
		"hsla(178, 48%, 10%, 1)",
		"hsla(177, 50%, 24%, 1)",
		"hsla(177, 43%, 30%, 1)",
	];

	const options = {
		width: window.innerWidth, //setting width and height to the window, increases the lag when resizing the window
		height: window.innerHeight,
		cellSize: 150, //lowering cellsize makes pattern finer, but reduces performace
		variance: 0.75, //between 0 and 1, increases triangle randomness
		seed: null, //null makes new patterns everytime, a seed will keep a constant randomness
		xColors: props.toggled ? codeColors : picColors, //colors for the triangles
		yColors: "match", //y axis colors match x axis colors
		fill: true, //triangles are filled in if true
		palette: trianglify.colorbrewer, //palette to choose from when using random colors
		colorSpace: "lab", //color space used (think rgb or hsla)
		colorFunction: trianglify.colorFunctions.interpolateLinear(0.5), //function for coloring triangles
		strokeWidth: 0, //width of triangle outline
		points: null, //null generates a random set of points otherwise, triangulates preset points
	};
	const pattern = trianglify(options);
	const svg = pattern.toSVGTree();

	//There has to be a better way to do this but for now, this is what I got
	const nodes = svg.children.map((child) => (
		<path
			d={child.attrs.d}
			fill={child.attrs.fill}
			shape-rendering={child.attrs["shape-rendering"]}
		/>
	));
	// Mess around with other possible options b/c this looks ugly af

	const renderable = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={window.innerWidth}
			height={window.innerHeight / 2}
			id="projectBackground"
		>
			{nodes}
		</svg>
	);

	return <div id="projectBackground">{renderable}</div>;
};

export default Background;
