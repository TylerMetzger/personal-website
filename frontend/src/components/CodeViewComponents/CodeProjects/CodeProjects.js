import "./CodeProjects.css";
import React, { useState, useRef } from "react";
import { Typography, Row, Col, Card, Modal, Carousel } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";

const Projects = (props) => {
	const windowWidth = useWindowSize()[0];
	const tabSpacing = <span style={{ opacity: "0" }}>TAB </span>; //JSX removes eading whitespace

	const [gLawModalVisible, setGLawModalVisible] = useState(false);
	const [pPalModalVisible, setPPalModalVisible] = useState(false);
	const [mySiteModalVisible, setMySiteVisible] = useState(false);
	const [wipModalVisible, setWipModalVisible] = useState(false);

	const handleCardClick = (cardNum) => {
		switch (cardNum) {
			case 0:
				setGLawModalVisible(true);
				break;
			case 1:
				setPPalModalVisible(true);
				break;
			case 2:
				setMySiteVisible(true);
				break;
			case 3:
				setWipModalVisible(true);
				break;
			default:
				setGLawModalVisible(false);
				setPPalModalVisible(false);
				setMySiteVisible(false);
				setWipModalVisible(false);
		}
	};

	const gLawCarouselRef = useRef();
	const gLawModal = (
		<Modal
			centered
			visible={gLawModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			bodyStyle={{ backgroundColor: "#1e1e1e", color: "white" }}
			footer={null}
		>
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"centered"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"title"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'Gonzalo Law User Portal'"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"visible"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"gLawModalVisible"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onOk"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onCancel"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"maskStyle"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"maskStyle: "}</Typography>
			<Typography className="string">{"'blur(5px)' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"footer"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">
				{"'https://github.com/pablof300/GonzaloLawDashboard'"}
			</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"target"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'_blank'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'primary'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"GithubFilled "}</Typography>
			<Typography className="constant">{"style"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"fontSize: "}</Typography>
			<Typography className="string">{"'10px' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="syntax">{"Github"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="curly">{"}"}</Typography>
			<br />
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
			<Typography className="string">{"'middle'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Col "}</Typography>
			<Typography className="constant">{"span"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'leftArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"gLawCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"prev"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
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
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"24 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"20"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'carouselWrapper'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Carousel "}</Typography>
			<Typography className="constant">{"ref"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"gLawCarouselRef"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<Row justify="center" align="middle" style={{ height: "80px" }}>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretLeftOutlined
						className="codeLeftArrow codeArrow"
						onClick={() => gLawCarouselRef.current.prev()}
					/>
				</Col>
				<Col span={windowWidth < 425 ? 24 : 20}>
					<div>
						<Carousel ref={gLawCarouselRef} dots={false}>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"gLawLogin"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"gLawUser1"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"gLawUser2"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="constant">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"gLawAdmin1"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"gLawAdmin2"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
						</Carousel>
					</div>
				</Col>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretRightOutlined
						className="codeRightArrow codeArrow"
						onClick={() => gLawCarouselRef.current.next()}
					/>
				</Col>
			</Row>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Carousel"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"div"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
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
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'rightArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"gLawCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"next"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
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
			{windowWidth <= 425 ? (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"color: "}</Typography>
					<Typography className="string">{"'rgba(0,0,0,.4)'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"textAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"hright: "}</Typography>
					<Typography className="string">{"'30px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"verticalAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"marginTop: "}</Typography>
					<Typography className="string">{"'10px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"Swipe to change pictures"}
					</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			) : (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'30px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
				</div>
			)}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'projectDesc'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<br />
			The Gonzalo Law User Portal was built for a local Gainesville law firm so
			their clients could access their accounts, look at their invoices, contact
			the lawyers assigned to their case, view appointments and events, and
			track the progress of their case. I developed both the backend and
			frontend along with 4 other people on my team utilizing an array of tools
			including Mailgun API, Passport.js, Mongo-Seeding API, Node Quickbooks
			API, and more.
			<br />
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="lowerDiv">{"div"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
		</Modal>
	);

	const pPalCarouselRef = useRef();
	const pPalModal = (
		<Modal
			centered
			visible={pPalModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			bodyStyle={{ backgroundColor: "#1e1e1e", color: "white" }}
			footer={null}
		>
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"centered"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"title"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'Protest Pal'"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"visible"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"pPalModalVisible"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onOk"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onCancel"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"maskStyle"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"maskStyle: "}</Typography>
			<Typography className="string">{"'blur(5px)' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"footer"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">
				{"'https://github/com/TylerMetzger/safety-app'"}
			</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"target"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'_blank'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'primary'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"GithubFilled "}</Typography>
			<Typography className="constant">{"style"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"fontSize: "}</Typography>
			<Typography className="string">{"'10px' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="syntax">{"Github"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="curly">{"}"}</Typography>
			<br />
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
			<Typography className="string">{"'middle'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Col "}</Typography>
			<Typography className="constant">{"span"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'leftArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"pPalCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"prev"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
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
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"24 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"20"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'carouselWrapper'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Carousel "}</Typography>
			<Typography className="constant">{"ref"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"pPalCarouselRef"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<Row justify="center" align="middle" style={{ height: "80px" }}>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretLeftOutlined
						className="codeLeftArrow codeArrow"
						onClick={() => pPalCarouselRef.current.prev()}
					/>
				</Col>
				<Col span={windowWidth < 425 ? 24 : 20}>
					<div>
						<Carousel ref={pPalCarouselRef} dots={false}>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"pPalMapPage"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">
									{"pPalMapPageModalOpened"}
								</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="ltgt">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"pPalResources"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
							<div className="codeCarouselEntryWrapper">
								<Typography className="constant">{"<"}</Typography>
								<Typography className="lowerDiv">{"img "}</Typography>
								<Typography className="constant">{"className"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="string">
									{"'carouselPicture' "}
								</Typography>
								<Typography className="constant">{"src"}</Typography>
								<Typography className="syntax">{"="}</Typography>
								<Typography className="curly">{"{"}</Typography>
								<Typography className="constant">{"pPalSafetyTps"}</Typography>
								<Typography className="curly">{"} "}</Typography>
								<Typography className="ltgt">{"/>"}</Typography>
							</div>
						</Carousel>
					</div>
				</Col>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretRightOutlined
						className="codeRightArrow codeArrow"
						onClick={() => pPalCarouselRef.current.next()}
					/>
				</Col>
			</Row>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Carousel"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"div"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
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
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'rightArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"pPalCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"next"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
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
			{windowWidth <= 425 ? (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"color: "}</Typography>
					<Typography className="string">{"'rgba(0,0,0,.4)'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"textAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"hright: "}</Typography>
					<Typography className="string">{"'30px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"verticalAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"marginTop: "}</Typography>
					<Typography className="string">{"'10px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"Swipe to change pictures"}
					</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			) : (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'30px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
				</div>
			)}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'projectDesc'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<br />
			Protest Pal is a full-stack web app that utilizes Google Maps API to map
			out protests in the United States. The website purposefully does not use
			any cookies or account saving as to give the users as much privacy as
			possible. Along with other helpful features such as extra resources or
			tips for staying safe during a protest, the map is interactive and
			clicking on a marker gives a detailed description of a protest's date,
			time, location, cause, organizer, and more.
			<br />
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="lowerDiv">{"div"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
		</Modal>
	);

	const mySiteModal = (
		<Modal
			centered
			visible={mySiteModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			bodyStyle={{ backgroundColor: "#1e1e1e", color: "white" }}
			footer={null}
		>
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"centered"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"title"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'Gonzalo Law User Portal'"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"visible"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"mySiteModalVisible"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onOk"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"onCancel"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="function">{"handleCardClick"}</Typography>
			<Typography className="syntax">{"("}</Typography>
			<Typography className="syntax">{"-"}</Typography>
			<Typography className="number">{"1"}</Typography>
			<Typography className="syntax">{")"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"maskStyle"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"maskStyle: "}</Typography>
			<Typography className="string">{"'blur(5px)' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="constant">{"footer"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">
				{"'https://github.com/TylerMetzger/personal-website'"}
			</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"target"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'_blank'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"href"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'primary'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"GithubFilled "}</Typography>
			<Typography className="constant">{"style"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"{ "}</Typography>
			<Typography className="constant">{"fontSize: "}</Typography>
			<Typography className="string">{"'10px' "}</Typography>
			<Typography className="syntax">{"}"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="syntax">{"Github"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Button"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="curly">{"}"}</Typography>
			<br />
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
			<Typography className="string">{"'middle'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Col "}</Typography>
			<Typography className="constant">{"span"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'leftArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"mySiteCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"prev"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
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
			<Typography className="number">{"20"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"img "}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'carouselPicture'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"src"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="constant">{"mySiteProjects"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
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
			<Typography className="constant">{"windowWidth "}</Typography>
			<Typography className="syntax">{"< "}</Typography>
			<Typography className="number">{"425 "}</Typography>
			<Typography className="syntax">{"? "}</Typography>
			<Typography className="number">{"0 "}</Typography>
			<Typography className="syntax">{": "}</Typography>
			<Typography className="number">{"2"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"CaretLeftOutlined"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'rightArrow arrow'"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="constant">{"onClick"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="curly">{"{"}</Typography>
			<Typography className="syntax">{"( ) "}</Typography>
			<Typography className="curly">{"=> "}</Typography>
			<Typography className="constant">{"mySiteCarouselRef"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="constant">{"current"}</Typography>
			<Typography className="syntax">{"."}</Typography>
			<Typography className="function">{"next"}</Typography>
			<Typography className="syntax">{"( )"}</Typography>
			<Typography className="curly">{"}"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"/>"}</Typography>
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
			{windowWidth <= 425 ? (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"color: "}</Typography>
					<Typography className="string">{"'rgba(0,0,0,.4)'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"textAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"hright: "}</Typography>
					<Typography className="string">{"'30px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"verticalAlign: "}</Typography>
					<Typography className="string">{"'center'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					{tabSpacing}
					<Typography className="constant">{"marginTop: "}</Typography>
					<Typography className="string">{"'10px'"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{">"}</Typography>
					<br />
					{tabSpacing}
					{tabSpacing}
					<Typography className="syntax">
						{"Swipe to change pictures"}
					</Typography>
					<br />
					{tabSpacing}
					<Typography className="ltgt">{"</"}</Typography>
					<Typography className="capitalDiv">{"Typography"}</Typography>
					<Typography className="ltgt">{">"}</Typography>
				</div>
			) : (
				<div>
					{tabSpacing}
					<Typography className="ltgt">{"<"}</Typography>
					<Typography className="lowerDiv">{"div "}</Typography>
					<Typography className="constant">{"style"}</Typography>
					<Typography className="syntax">{"="}</Typography>
					<Typography className="curly">{"{"}</Typography>
					<Typography className="syntax">{"{ "}</Typography>
					<Typography className="constant">{"height: "}</Typography>
					<Typography className="string">{"'30px' "}</Typography>
					<Typography className="syntax">{"}"}</Typography>
					<Typography className="curly">{"}"}</Typography>
					<Typography className="ltgt">{"/>"}</Typography>
				</div>
			)}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"className"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'projectDesc'"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<br />
			Pictures are a little redundant right? Building my own website helped me
			to not only experiment with new and fun frontend technologies, it allowed
			me to express myself through code. I don't consider myself much of a
			designer, but by using tools such as Ant Design, React Scroll, Animate on
			Scroll, and Trianglify I was able to put some ideas together.
			<br />
			<br />
			{tabSpacing}
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Typography"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="lowerDiv">{"div"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
			<br />
			<Typography className="ltgt">{"</"}</Typography>
			<Typography className="capitalDiv">{"Modal"}</Typography>
			<Typography className="ltgt">{">"}</Typography>
		</Modal>
	);

	return (
		<div id="projects" className="codeProjects">
			<div style={{ height: "calc(30vh - 47.6px)" }} />
			<div id="projectsTitleRow" />
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="lowerDiv">{"div "}</Typography>
			<Typography className="constant">{"id"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'projects'"}</Typography>
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
			<Typography className="ltgt">{"/>"}</Typography>

			<div data-aos="fade-up" data-aos-duration={1200}>
				{windowWidth <= windowSizes.mobileL ? (
					<div>
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
						<Typography className="constant">{"id"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsTitleRow' "}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
					</div>
				) : (
					<div>
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Row "}</Typography>
						<Typography className="constant">{"justify"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'center' "}</Typography>
						<Typography className="constant">{"align"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'middle' "}</Typography>
						<Typography className="constant">{"id"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsTitleRow' "}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
				)}
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
				{windowWidth <= windowSizes.tablet ? (
					<div>
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
						<Typography className="string">{"'projectsTitle' "}</Typography>
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
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
					</div>
				) : (
					<div>
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Typography "}</Typography>
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsTitle' "}</Typography>
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up' "}</Typography>
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</div>
				)}

				<Typography className="codeProjectsTitle">My Projects</Typography>

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
			</div>
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
			<Typography className="ltgt">{"/>"}</Typography>
			<br />
			{tabSpacing}
			<Typography className="ltgt">{"<"}</Typography>
			<Typography className="capitalDiv">{"Row "}</Typography>
			<Typography className="constant">{"align"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'middle' "}</Typography>
			<Typography className="constant">{"id"}</Typography>
			<Typography className="syntax">{"="}</Typography>
			<Typography className="string">{"'projectsRow' "}</Typography>
			<Typography className="ltgt">{">"}</Typography>

			<Row align="middle" className="codeProjectsRow">
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={0}
				>
					<Card
						hoverable
						onClick={() => handleCardClick(0)}
						className="codeProjectCard"
						bordered={true}
					>
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"flex"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up'"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-delay"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"0"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"hoverable"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"bordered"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"onClick"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{ "}</Typography>
						<Typography className="syntax">{"( ) "}</Typography>
						<Typography className="curly">{"=> "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="function">{"handleCardClick"}</Typography>
						<Typography className="syntax">{"("}</Typography>
						<Typography className="number">{"0"}</Typography>
						<Typography className="syntax">{")"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectCard'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"cover"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="constant">{"gLawCover"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsDivider'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card.Meta"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"title"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">
							{"'Gonzalo Law User Portal'"}
						</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"description"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">
							{"'Click to learn more'"}
						</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Card"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</Card>
				</Col>
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={200}
				>
					<Card
						hoverable
						onClick={() => handleCardClick(1)}
						className="codeProjectCard"
						bordered={true}
					>
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"flex"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up'"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-delay"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"hoverable"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"bordered"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"onClick"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{ "}</Typography>
						<Typography className="syntax">{"( ) "}</Typography>
						<Typography className="curly">{"=> "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="function">{"handleCardClick"}</Typography>
						<Typography className="syntax">{"("}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="syntax">{")"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectCard'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"cover"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="constant">{"pPalCover"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsDivider'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card.Meta"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"title"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'Protest Pal'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"description"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">
							{"'Click to learn more'"}
						</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Card"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</Card>
				</Col>
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={400}
				>
					<Card
						hoverable
						onClick={() => handleCardClick(2)}
						className="codeProjectCard"
						bordered={true}
					>
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"flex"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up'"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-delay"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"400"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"hoverable"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"bordered"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"onClick"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{ "}</Typography>
						<Typography className="syntax">{"( ) "}</Typography>
						<Typography className="curly">{"=> "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						{tabSpacing}
						<Typography className="function">{"handleCardClick"}</Typography>
						<Typography className="syntax">{"("}</Typography>
						<Typography className="number">{"2"}</Typography>
						<Typography className="syntax">{")"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectCard'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"cover"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="constant">{"mySiteCover"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsDivider'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card.Meta"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"title"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'Personal Website'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"description"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">
							{"'Click to learn more'"}
						</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Card"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
					</Card>
				</Col>
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={600}
				>
					<Card className="codeWipCard" bordered={true}>
						<br />
						{tabSpacing}
						<br />
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Col "}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"flex"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'fade-up'"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-duration"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"1200"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="constant">{"data-aos-delay"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="number">{"600"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"bordered"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'wipCard'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"cover"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="curly">{"{"}</Typography>
						<Typography className="constant">{"wipCover"}</Typography>
						<Typography className="curly">{"}"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Divider "}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"className"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'projectsDivider'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"<"}</Typography>
						<Typography className="capitalDiv">{"Card.Meta"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"title"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'Smash Bot'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="constant">{"description"}</Typography>
						<Typography className="syntax">{"="}</Typography>
						<Typography className="string">{"'Coming Soon!'"}</Typography>
						<br />
						{tabSpacing}
						{tabSpacing}
						<Typography className="ltgt">{"/>"}</Typography>
						<br />
						{tabSpacing}
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Card"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						<Typography className="ltgt">{"</"}</Typography>
						<Typography className="capitalDiv">{"Col"}</Typography>
						<Typography className="ltgt">{">"}</Typography>
						<br />
						{tabSpacing}
						<br />
						{tabSpacing}
					</Card>
				</Col>
			</Row>
			{gLawModal}
			{pPalModal}
			{mySiteModal}
			<div style={{ height: "calc(30vh - 47.6px)" }} />
		</div>
	);
};

export default Projects;
