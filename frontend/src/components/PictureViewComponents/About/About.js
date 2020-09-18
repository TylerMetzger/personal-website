import React from "react";
import { Typography, Row, Col, Divider } from "antd";
import { GiKnifeFork } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import UfLogo from "../../../assets/logos/ufLogo.js";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";
import "./About.css";

const About = (props) => {
	const windowWidth = useWindowSize()[0];

	//ternary return operator since I have two different layouts depending on screen size
	//specific differences bwteen screen sizes that share a layout can be found in the css
	return windowWidth > windowSizes.mobileL + 10 ? (
		<div id="about">
			<div style={{ height: "calc(30vh - 47.6px)" }} />
			<Row justify="center" align="middle" id="aboutTitleRow">
				<Col span={24}>
					<Typography
						className="aboutTitle"
						data-aos="fade-up"
						data-aos-duration={1200}
					>
						About Me
					</Typography>
				</Col>
			</Row>
			<div style={{ height: "50px" }} />
			<div className="aboutDesc">
				<Row
					justify="center"
					align="middle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					<GiKnifeFork className="aboutIcon" />
					<Col span={1}>
						<Divider type="vertical" className="aboutDivider" />
					</Col>
					<Col span={17}>
						<Typography className="aboutDescription">
							You can always find me in the kitchen experimenting with some new
							flavors. I love looking for a new dish to make. Though as much as
							I love cooking, nothing beats eating. Let me know if you have any
							good recipes.
						</Typography>
					</Col>
				</Row>
				<div style={{ height: "20px" }} />
				<Row
					justify="center"
					align="middle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					<Col span={17}>
						<Typography className="aboutDescription">
							I'm a junior studying computer science at the University of
							Florida. You can catch me with the rock climbing club, holding
							office hours for software engineering, or just exploring the swamp
							with some friends. Go Gators!!!
						</Typography>
					</Col>
					<Col span={1}>
						<Divider type="vertical" className="aboutDivider" />
					</Col>
					<UfLogo />
				</Row>
				<div style={{ height: "20px" }} />
				<Row
					justify="center"
					align="middle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					<FaLaptopCode className="aboutIcon" />
					<Col span={1}>
						<Divider type="vertical" className="aboutDivider" />
					</Col>
					<Col span={17}>
						<Typography className="aboutDescription">
							I have a passion for learning new technologies and developing
							applications. Right now, my current interests are in full-stack
							development and machine learning. My mantra is to forever be
							looking to learn.
						</Typography>
					</Col>
				</Row>
			</div>
			<div style={{ height: "calc(30vh - 47.6px)" }} />
		</div>
	) : (
		<div id="about">
			<div style={{ height: "calc(30vh - 47.6px)" }} />
			<Row justify="center" align="middle" id="aboutTitleRow">
				<Col span={24}>
					<Typography
						className="aboutTitle"
						data-aos="fade-up"
						data-aos-duration={1200}
					>
						About Me
					</Typography>
				</Col>
			</Row>
			<div style={{ height: "50px" }} />
			<div className="aboutDesc">
				<div
					data-aos="fade-up"
					data-aos-duration={1200}
					className="mobileAboutBox"
				>
					<Row justify="center" align="middle">
						<Col span={24}>
							<GiKnifeFork className="aboutIcon" />
						</Col>
					</Row>
					<Row justify="center" align="middle">
						<Divider type="horizontal" className="aboutDivider" />
					</Row>
					<Row justify="center" align="middle">
						<Col span={20}>
							<Typography className="aboutDescription">
								You can always find me in the kitchen experimenting with some
								new flavors. I love looking for a new dish to make. Though as
								much as I love cooking, nothing beats eating. Let me know if you
								have any good recipes.
							</Typography>
						</Col>
					</Row>
				</div>
				<div style={{ height: "50px" }} />
				<div
					data-aos="fade-up"
					data-aos-duration={1200}
					className="mobileAboutBox"
				>
					<Row justify="center" align="middle">
						<Col span={24}>
							<UfLogo />
						</Col>
					</Row>
					<Row justify="center" align="middle">
						<Divider type="horizontal" className="aboutDivider" />
					</Row>
					<Row justify="center" align="middle">
						<Col span={20}>
							<Typography className="aboutDescription">
								I'm a junior studying computer science at the University of
								Florida. You can catch me with the rock climbing club, holding
								office hours for software engineering, or just exploring the
								swamp with some friends. Go Gators!!!
							</Typography>
						</Col>
					</Row>
				</div>
				<div style={{ height: "50px" }} />
				<div
					data-aos="fade-up"
					data-aos-duration={1200}
					className="mobileAboutBox"
				>
					<Row justify="center" align="middle">
						<Col span={24}>
							<FaLaptopCode className="aboutIcon" />
						</Col>
					</Row>
					<Row justify="center" align="middle">
						<Divider type="horizontal" className="aboutDivider" />
					</Row>
					<Row justify="center" align="middle">
						<Col span={20}>
							<Typography className="aboutDescription">
								I have a passion for learning new technologies and developing
								applications. Right now, my current interests are in full-stack
								development and machine learning. My mantra is to forever be
								looking to learn.
							</Typography>
						</Col>
					</Row>
				</div>
			</div>
			<div style={{ height: "calc(30vh - 47.6px)" }} />
		</div>
	);
};

export default About;
