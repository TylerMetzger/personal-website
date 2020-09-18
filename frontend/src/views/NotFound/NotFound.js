import "./NotFound.css";
import React from "react";
import { Typography, Grid, Col, Row, Divider } from "antd";

const NotFound = (props) => {
	const tabSpacing = <span style={{ opacity: "0" }}>TAB </span>; //JSX removes leading whitespace

	if (!props.toggled) {
		return (
			<div className="notFoundPage">
				<div style={{ height: "20vh" }} />
				<Row className="statusCode">
					<Col span={24}>404</Col>
				</Row>
				<Row className="errorMessage">
					<Col span={24}>Sorry, page not found :(</Col>
					<Col span={24}>
						Click <a href="../">here</a> to go back to the main site.
					</Col>
				</Row>
			</div>
		);
	} else {
		return (
			<div className="notFoundPageCode">
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="lowerDiv">{"div "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'notFoundPage'"}</Typography>
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
				<Typography className="string">{"'20vh' "}</Typography>
				<Typography className="syntax">{"}"}</Typography>
				<Typography className="curly">{"}"}</Typography>
				<Typography className="ltgt">{"/>"}</Typography>
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Row "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'statusCode'"}</Typography>
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

				<Row className="statusCodeCode">
					<Col span={24}>404</Col>
				</Row>
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
				<br />
				{tabSpacing}
				<Typography className="ltgt">{"<"}</Typography>
				<Typography className="capitalDiv">{"Row "}</Typography>
				<Typography className="constant">{"className"}</Typography>
				<Typography className="syntax">{"="}</Typography>
				<Typography className="string">{"'statusCode'"}</Typography>
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
				<Row className="errorMessageCode">
					<Col span={24}>Sorry, page not found :(</Col>
				</Row>
				{tabSpacing}
				{tabSpacing}
				<Typography className="ltgt">{"</"}</Typography>
				<Typography className="capitalDiv">{"Col"}</Typography>
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
				<Row className="errorMessageCode">
					<Col span={24}>
						Click
						<Typography className="ltgt">{" <"}</Typography>
						<Typography className="lowerDiv">{"a "}</Typography>
						<Typography className="constant">{"href"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'../'"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<a href="../">here</a>
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="lowerDiv">{"a "}</Typography>
						<Typography className="ltgt">{"> "}</Typography>
						to go back to the main site.
					</Col>
				</Row>
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
		);
	}
};

export default NotFound;
