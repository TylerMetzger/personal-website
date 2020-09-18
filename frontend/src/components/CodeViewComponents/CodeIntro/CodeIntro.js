import "./CodeIntro.css";
import React from "react";
import { Typography, Col, Row } from "antd";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";

const CodeIntro = (props) => {
	const windowWidth = useWindowSize()[0];
	const tabSpacing = <span style={{ opacity: "0" }}>TAB </span>; //JSX removes eading whitespace

	if (windowWidth < windowSizes.tablet) {
		return (
			<div id="intro" className="codeIntro">
				<div className="codeIntroTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'intro' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
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
					<Typography className="string">{"'introRow' "}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="constant">{"pull"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"24"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
				</div>

				<Row justify="center" align="middle" className="codeIntroRow">
					<Col push={0} span={24}>
						<div className="codeIntroDetails">
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
							<Typography className="string">{"'introGreeting' "}</Typography>
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
							<Typography className="curly">{"} "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos-delay"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"800"}</Typography>
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
							<Typography className="syntax">{"What's up, I'm"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
						<div className="codeIntroDetails">
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
							<Typography className="string">{"'introName' "}</Typography>
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
							<Typography className="curly">{"} "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos-delay"}</Typography>
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
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="syntax">{"Tyler Metzger"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"/Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
					</Col>
				</Row>

				<div className="codeIntroFooter">
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
					<br />
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			</div>
		);
	} else if (windowWidth < windowSizes.laptop) {
		return (
			<div id="intro" className="codeIntro">
				<div className="codeIntroTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
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
					<Typography className="string">{"'introRow' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="constant">{"pull"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"24"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
				</div>

				<Row justify="center" align="middle" className="codeIntroRow">
					<Col push={0} span={24}>
						<div className="codeIntroDetails">
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
							<Typography className="string">{"'introGreeting' "}</Typography>
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
							<Typography className="curly">{"} "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos-delay"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"800"}</Typography>
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
							<Typography className="syntax">{"What's up, I'm"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
						<div className="codeIntroDetails">
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
							<Typography className="string">{"'introName' "}</Typography>
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
							<Typography className="curly">{"} "}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="constant">{"data-aos-delay"}</Typography>
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
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="syntax">{"Tyler Metzger"}</Typography>
							<br />
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"/Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
					</Col>
				</Row>

				<div className="codeIntroFooter">
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
					<br />
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			</div>
		);
	} else {
		return (
			<div id="intro" className="codeIntro">
				<div className="codeIntroTopper">
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"id"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="string">{"'intro' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
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
					<Typography className="string">{"'introRow' "}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Col "}</Typography>
					<Typography className="constant">{"pull"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"0"}</Typography>
					<Typography className="curly">{"} "}</Typography>
					<Typography className="constant">{"span"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="number">{"24"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
					<br />
				</div>

				<Row justify="center" align="middle" className="codeIntroRow">
					<Col push={0} span={24}>
						<div
							className="codeIntroDetails"
							data-aos="fade-up"
							data-aos-duration={1200}
							data-aos-delay={800}
						>
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Typography "}</Typography>
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'introGreeting' "}</Typography>
							<Typography className="constant">{"data-aos"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'fade-up' "}</Typography>
							<Typography className="constant">
								{"data-aos-duration"}
							</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"} "}</Typography>
							<Typography className="constant">{"data-aos-delay"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"800"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>

							<Typography className="codeIntroText">
								{"What's up, I'm"}
							</Typography>

							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"</"}</Typography>
							<Typography className="capitalDiv">{"Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
						<div
							className="codeIntroDetails"
							data-aos="fade-up"
							data-aos-duration={1200}
							data-aos-delay={1200}
						>
							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"Typography "}</Typography>
							<Typography className="constant">{"className"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'introName' "}</Typography>
							<Typography className="constant">{"data-aos"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="string">{"'fade-up' "}</Typography>
							<Typography className="constant">
								{"data-aos-duration"}
							</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"} "}</Typography>
							<Typography className="constant">{"data-aos-delay"}</Typography>
							<Typography className="syntax">{"="}</Typography>
							<Typography className="curly">{"{"}</Typography>
							<Typography className="number">{"1200"}</Typography>
							<Typography className="curly">{"}"}</Typography>
							<Typography className="ltgt">{">"}</Typography>

							<Typography className="codeIntroText">
								{"Tyler Metzger"}
							</Typography>

							{tabSpacing}
							{tabSpacing}
							{tabSpacing}
							<Typography className="ltgt">{"<"}</Typography>
							<Typography className="capitalDiv">{"/Typography"}</Typography>
							<Typography className="ltgt">{">"}</Typography>
						</div>
					</Col>
				</Row>

				<div className="codeIntroFooter">
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
					<br />
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="lowerDiv">{"div"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			</div>
		);
	}
};

export default CodeIntro;
