import "./CodeResume.css";
import React, { useState } from "react";
import { Typography, Col, Row, Divider } from "antd";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";

const Resume = (props) => {
	const windowWidth = useWindowSize()[0];
	const tabSpacing = <span style={{ opacity: "0" }}>TAB </span>; //JSX removes leading whitespace

	if (windowWidth >= windowSizes.tablet) {
		return (
			<div id="resume" className="codeResume">
				<div style={{ height: "calc(30vh - 47.6px)" }} />
				<div className="codeResumeTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resume' "}</Typography>
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
				</div>
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Typography "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'resumeTitle' "}</Typography>
				<Typography className="constant">{"data-aos"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'fade-up' "}</Typography>
				<Typography className="constant">{"data-aos-duration"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="number">{"1200"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{">"}</Typography>

				<Typography
					className="codeResumeTitle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{"Resume"}
				</Typography>

				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="capitalDiv">{"Typography"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Typography "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'resumeSubtitle' "}</Typography>
				<Typography className="constant">{"data-aos"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'fade-up' "}</Typography>
				<Typography className="constant">{"data-aos-duration"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="number">{"1200"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{">"}</Typography>

				<Typography
					className="codeResumeSubtitle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					<Typography className="syntax">{"Click "}</Typography>
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"a "}</Typography>
					<Typography className="constant">{"href"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"resumePDF"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"target"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'_blank'"}</Typography>
					<Typography className="ltgt">{"> "}</Typography>
					<Typography className="syntax">{"here "}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"a"}</Typography>
					<Typography className="ltgt">{"> "}</Typography>
					<Typography className="syntax">{"to download the pdf."}</Typography>
				</Typography>

				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="capitalDiv">{"Typography"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
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
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Education"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"University of Florida"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Honors College"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />

					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'right' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"August 2018 - Present"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Bachelor of Computer Science: Expected May 2022"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Minor: Economics"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">{"GPA: 3.83"}</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{`Related Coursework: Data Structures, Computer Organization,
								Operating Systems, Software Engineering`}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
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
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Projects"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">
						{"Gonzalo Law User Portal"}
					</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Work on backend user and admin models, data access objects, controllers, and routes"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Correspond with several team members and a client"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Participate in agile production using sprints to demo work with client"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Personal Website"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Utilize modern frontend technologies like Ant Design, Animate on Scroll, and Trianglify"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Deploy website to personal web address and domain name"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Protest Pal"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Map out protests on a map using Google Maps API"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Seed database with test data and connect to frontend"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
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
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Involvement"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Rock Climbing Club"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Member"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />

					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'right' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"November 2019 - Present"}
					</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Compete against other college teams across state"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Maintain physical and mental fitness through regimented exercise"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Practice team-building techniques and motivate fellow members"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
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
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Technical Skills"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Languages"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"C, C++, Java, Javascript, CSS, HTML, Python, Matlab, R"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Frameworks"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Express, React, Node.js"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Typography className="syntax">{"Tools"}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
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
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Visual Studio 2019, Visual Studio Code, Git, Git Bash, Github, Postman, MongoDB Atlas, Oracle VM Virtualbox, WordPress, Trello"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
				<div style={{ height: "calc(30vh - 47.6px)" }} />
			</div>
		);
	} else {
		return (
			<div id="resume" className="codeResume">
				<div style={{ height: "calc(30vh - 47.6px)" }} />
				<div className="codeResumeTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resume' "}</Typography>
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
				</div>
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Typography "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'resumeTitle' "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"data-aos"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'fade-up' "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"data-aos-duration"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="number">{"1200"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{">"}</Typography>

				<Typography
					className="codeResumeTitle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{"Resume"}
				</Typography>

				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="capitalDiv">{"Typography"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Typography "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'resumeSubtitle' "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"data-aos"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'fade-up' "}</Typography>
				<br />
				{tabSpacing}
				{tabSpacing}
				<Typography className="constant">{"data-aos-duration"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="curly">{"{"}</Typography>
				<Typography className="number">{"1200"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{">"}</Typography>

				<Typography
					className="codeResumeSubtitle"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					<Typography className="syntax">{"Click "}</Typography>
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"a "}</Typography>
					<Typography className="constant">{"href"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"resumePDF"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"target"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'_blank'"}</Typography>
					<Typography className="ltgt">{"> "}</Typography>
					<Typography className="syntax">{"here "}</Typography>
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"a"}</Typography>
					<Typography className="ltgt">{"> "}</Typography>
					<Typography className="syntax">{"to download the pdf."}</Typography>
				</Typography>

				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="capitalDiv">{"Typography"}</Typography>
				<Typography className="ltgt">{">"}</Typography>
				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'fade-up' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos-duration"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"1200"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Education"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"University of Florida"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
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
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Honors College"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
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
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'right' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"August 2018 - Present"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Bachelor of Computer Science: Expected May 2022"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Minor: Economics"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">{"GPA: 3.83"}</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{`Related Coursework: Data Structures, Computer Organization,
								Operating Systems, Software Engineering`}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'fade-up' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos-duration"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"1200"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Projects"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"Gonzalo Law User Portal"}
					</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Work on backend user and admin models, data access objects, controllers, and routes"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Correspond with several team members and a client"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Participate in agile production using sprints to demo work with client"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Personal Website"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Utilize modern frontend technologies like Ant Design, Animate on Scroll, and Trianglify"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Deploy website to personal web address and domain name"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Protest Pal"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Map out protests on a map using Google Maps API"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Seed database with test data and connect to frontend"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'fade-up' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos-duration"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"1200"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Involvement"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Rock Climbing Club"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
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
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Member"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
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
					<Typography className="string">{"'resumeDesc' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"float: "}</Typography>
					<Typography className="string">{"'right' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"November 2019 - Present"}
					</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"br"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"span"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Compete against other college teams across state"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Maintain physical and mental fitness through regimented exercise"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Practice team-building techniques and motivate fellow members"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>

				<div
					className="codeResumeDetails"
					data-aos="fade-up"
					data-aos-duration={1200}
				>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDetails' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'fade-up' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"data-aos-duration"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"1200"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"24 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"16"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="constant">{"orientation"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'left' "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"className"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'resumeDivider'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Technical Skills"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Divider "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Languages"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"C, C++, Java, Javascript, CSS, HTML, Python, Matlab, R"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Frameworks"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{"Express, React, Node.js"}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
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
					<Typography className="string">{"'resumeDesc'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"Tools"}</Typography>
					<br />
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
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="constant">{"justify"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="constant">{"windowWidth "}</Typography>
					<Typography className="syntax">{"<= "}</Typography>
					<Typography className="constant">{"windowSizes.mobileL "}</Typography>
					<Typography className="syntax">{"+ "}</Typography>
					<Typography className="number">{"15 "}</Typography>
					<Typography className="syntax">{"? "}</Typography>
					<Typography className="number">{"22 "}</Typography>
					<Typography className="syntax">{": "}</Typography>
					<Typography className="number">{"14"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"offset"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<Row justify="center">
						<Col
							span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
							offset={0}
						>
							<ul className="codeList">
								<li>
									<Typography className="ltgt">{"<"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
									<Typography className="syntax">
										{
											"Visual Studio 2019, Visual Studio Code, Git, Git Bash, Github, Postman, MongoDB Atlas, Oracle VM Virtualbox, WordPress, Trello"
										}
									</Typography>
									<Typography className="ltgt">{"</"}</Typography>
									<Typography className="lowerDiv">{"li"}</Typography>
									<Typography className="ltgt">{">"}</Typography>
								</li>
							</ul>
						</Col>
					</Row>
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"ul"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Row "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
				<div style={{ height: "calc(30vh - 47.6px)" }} />
			</div>
		);
	}
};

export default Resume;
