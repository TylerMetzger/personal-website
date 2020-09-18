import React from "react";
import { Typography, Row, Col } from "antd";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";
import "./CodeAbout.css";

const CodeAbout = (props) => {
	const windowWidth = useWindowSize()[0];
	const tabSpacing = <span style={{ opacity: "0" }}>TAB </span>; //JSX removes leading whitespace

	//probably a better, more modular way of doing this so it doesn't take 2000+ lines of code

	if (windowWidth >= windowSizes.tablet) {
		return (
			<div id="about" className="codeAbout">
				<div style={{ height: "calc(20vh - 47.6px)" }} />
				<div id="aboutTitleRow" />
				<div className="codeAboutTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'about' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'calc(20vh - 47.6px)' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>
					<br />
				</div>
				<Row justify="center" align="middle">
					<Col span={24}>
						<Typography>
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Row "}</Typography>
							<Typography className="constant">{"justify"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'center' "}</Typography>
							<Typography className="constant">{"align"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'middle' "}</Typography>
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitleRow' "}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Col "}</Typography>
							<Typography className="constant">{"span"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"24"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Typography "}</Typography>
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitle' "}</Typography>
							<Typography className="constant">{"data-aos"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'fade-up' "}</Typography>
							<Typography className="constant">
								{"data-aos-duration"}
							</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />

							<Typography
								className="codeAboutTitle"
								data-aos="fade-up"
								data-aos-duration={1200}
							>
								{"About Me"}
							</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Col"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Row"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</Typography>
					</Col>
				</Row>
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'50px' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'aboutDesc'"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div>
					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}

						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"GiKnifeFork "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`You can always find me in the kitchen experimenting with some new
						flavors. I love looking for a new dish to make. Though as much as I
						love cooking, nothing beats eating. Let me know if you have any good
						recipes.`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>

					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'20px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>

					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`I'm a junior studying computer science at the University of
							Florida. You can catch me with the rock climbing club, holding
							office hours for software engineering, or just exploring the swamp
							with some friends. Go Gators!!!`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"UfLogo "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>

					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'20px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>

					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}

						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"FaLaptopCode "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`I have a passion for learning new technologies and developing
								applications. Right now, my current interests are in full-stack
								development and machine learning. My mantra is to forever be
								looking to learn.`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
				</div>
				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'calc(30vh - 47.6px)' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div style={{ height: "calc(30vh - 47.6px)" }} />
			</div>
		);
	} else if (windowWidth >= windowSizes.mobileL + 10) {
		return (
			<div id="about" className="codeAbout">
				<div style={{ height: "calc(20vh - 47.6px)" }} />
				<div id="aboutTitleRow" />
				<div className="codeAboutTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'about' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'calc(20vh - 47.6px)' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>
					<br />
				</div>
				<Row justify="center" align="middle">
					<Col span={24}>
						<Typography>
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Row "}</Typography>
							<Typography className="constant">{"justify"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'center' "}</Typography>
							<Typography className="constant">{"align"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'middle' "}</Typography>
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitleRow' "}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Col "}</Typography>
							<Typography className="constant">{"span"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"24"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Typography "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitle' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'fade-up' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">
								{"data-aos-duration"}
							</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{">"}</Typography>
							<Typography
								className="codeAboutTitle"
								data-aos="fade-up"
								data-aos-duration={1200}
							>
								{"About Me"}
							</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Col"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Row"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</Typography>
					</Col>
				</Row>
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'50px' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'aboutDesc'"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div>
					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}

						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"GiKnifeFork "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`You can always find me in the kitchen experimenting with some new
						flavors. I love looking for a new dish to make. Though as much as I
						love cooking, nothing beats eating. Let me know if you have any good
						recipes.`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>

					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'20px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>

					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`I'm a junior studying computer science at the University of
							Florida. You can catch me with the rock climbing club, holding
							office hours for software engineering, or just exploring the swamp
							with some friends. Go Gators!!!`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"UfLogo "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>

					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'20px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>

					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}

						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">
							{"FaLaptopCodeFork "}
						</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'vertical' "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider'"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"17"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<Row justify="center" align="middle">
							<Col span={17}>
								<Typography className="codeAboutDesc">
									{`I have a passion for learning new technologies and developing
								applications. Right now, my current interests are in full-stack
								development and machine learning. My mantra is to forever be
								looking to learn.`}
								</Typography>
							</Col>
						</Row>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
				</div>
				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'calc(30vh - 47.6px)' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div style={{ height: "calc(30vh - 47.6px)" }} />
			</div>
		);
	} else {
		return (
			<div id="about" className="codeAbout">
				<div style={{ height: "calc(20vh - 47.6px)" }} />
				<div className="codeAboutTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'about' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'calc(20vh - 47.6px)' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>
					<br />
				</div>
				<Row justify="center" align="middle" id="aboutTitleRow">
					<Col span={24}>
						<Typography>
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Row "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"justify"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'center' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"align"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'middle' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitleRow' "}</Typography>
							<br />
							{tabSpacing}
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Col "}</Typography>
							<Typography className="constant">{"span"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"24"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Typography "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'aboutTitle' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'fade-up' "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">
								{"data-aos-duration"}
							</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{">"}</Typography>
							<br />
							<Typography
								className="codeAboutTitle"
								data-aos="fade-up"
								data-aos-duration={1200}
							>
								{"About Me"}
							</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Col"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
							<br />
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Row"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</Typography>
					</Col>
				</Row>
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'50px' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'aboutDesc'"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div>
					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="lowerDiv">{"div "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'mobileAboutBox' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"24"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"GiKnifeFork "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'horizonal' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"20"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>

						<Row justify="center" align="center">
							<Col span={20}>
								<Typography className="codeAboutDesc">
									{`You can always find me in the kitchen experimenting with some new
						flavors. I love looking for a new dish to make. Though as much as I
						love cooking, nothing beats eating. Let me know if you have any good
						recipes.`}
								</Typography>
							</Col>
						</Row>

						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="lowerDiv">{"div"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'50px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>
					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="lowerDiv">{"div "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'mobileAboutBox' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"24"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"UfLogo"}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'horizonal' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"20"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>

						<Row justify="center" align="center">
							<Col span={20}>
								<Typography className="codeAboutDesc">
									{`I'm a junior studying computer science at the University of
							Florida. You can catch me with the rock climbing club, holding
							office hours for software engineering, or just exploring the swamp
							with some friends. Go Gators!!!`}
								</Typography>
							</Col>
						</Row>

						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="lowerDiv">{"div"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'50px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{" />"}</Typography>
					<div data-aos="fade-up" data-aos-duration={1200}>
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="lowerDiv">{"div "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'mobileAboutBox' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"24"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"FaLaptopCode "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutIcon' "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"type"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'horizonal' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDivider' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<Typography className="constant">{"span"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"20"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'aboutDescription' "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>

						<Row justify="center" align="center">
							<Col span={20}>
								<Typography className="codeAboutDesc">
									{`I have a passion for learning new technologies and developing
								applications. Right now, my current interests are in full-stack
								development and machine learning. My mantra is to forever be
								looking to learn.`}
								</Typography>
							</Col>
						</Row>

						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Typography"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Row"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="lowerDiv">{"div"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
				</div>
				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"style"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="syntax">{"{ "}</Typography>
				<Typography className="constant">{"height: "}</Typography>
				<Typography className="string">{"'calc(30vh - 47.6px)' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{" />"}</Typography>
				<br />
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="lowerDiv">{"div"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div style={{ height: "calc(30vh - 47.6px)" }} />
			</div>
		);
	}
};

export default CodeAbout;
