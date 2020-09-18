import "./Projects.css";
import React, { useState, useRef } from "react";
import {
	Typography,
	Row,
	Col,
	Card,
	Button,
	Divider,
	Modal,
	Carousel,
} from "antd";
import { IoIosBuild } from "react-icons/io";
import {
	GithubFilled,
	CaretLeftOutlined,
	CaretRightOutlined,
} from "@ant-design/icons";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";

import pPalLogo from "../../../assets/project-pics/protestPal/protestPalLogo.png";
import pPalMapPage from "../../../assets/project-pics/protestPal/mapPage.png";
import pPalMapPageModalOpened from "../../../assets/project-pics/protestPal/mapPageModalOpened.png";
import pPalResources from "../../../assets/project-pics/protestPal/resources.png";
import pPalSafetyTips from "../../../assets/project-pics/protestPal/safeteyTips.png";

import gonzaloLawLogo from "../../../assets/project-pics/gonzaloLaw/logo.jpg";
import gLawLogin from "../../../assets/project-pics/gonzaloLaw/loginPage.png";
import gLawAdmin1 from "../../../assets/project-pics/gonzaloLaw/adminDashboard1.png";
import gLawAdmin2 from "../../../assets/project-pics/gonzaloLaw/adminDashboard2.png";
import gLawUser1 from "../../../assets/project-pics/gonzaloLaw/userDashboard1.png";
import gLawUser2 from "../../../assets/project-pics/gonzaloLaw/userDashboard2.png";

import personalWebsiteLogo from "../../../assets/project-pics/personalWebsite/logo.png";
import mySiteProjects from "../../../assets/project-pics/personalWebsite/projects.png";

const Projects = (props) => {
	const windowWidth = useWindowSize()[0];

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
			title="Gonzalo Law User Portal"
			visible={gLawModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			footer={
				<Button
					href="https://github.com/pablof300/GonzaloLawDashboard"
					target="_blank"
					type="primary"
				>
					<GithubFilled style={{ fontSize: "18px" }} />
					Github
				</Button>
			}
		>
			<Row justify="center" align="middle">
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretLeftOutlined
						className="leftArrow arrow"
						onClick={() => gLawCarouselRef.current.prev()}
					/>
				</Col>
				<Col span={windowWidth < 425 ? 24 : 20}>
					<div className="carouselWrapper">
						<Carousel ref={gLawCarouselRef}>
							<img
								className="carouselPicture"
								src={gLawLogin}
								alt="gLawLogin"
							/>
							<img
								className="carouselPicture"
								src={gLawUser1}
								alt="gLawUser1"
							/>
							<img
								className="carouselPicture"
								src={gLawUser2}
								alt="gLawUser2"
							/>
							<img
								className="carouselPicture"
								src={gLawAdmin1}
								alt="gLawAdmin1"
							/>
							<img
								className="carouselPicture"
								src={gLawAdmin2}
								alt="gLawAdmin2"
							/>
						</Carousel>
					</div>
				</Col>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretRightOutlined
						className="rightArrow arrow"
						onClick={() => gLawCarouselRef.current.next()}
					/>
				</Col>
			</Row>
			{windowWidth <= 425 ? (
				<Typography
					style={{
						color: "rgba(0,0,0,.4)",
						textAlign: "center",
						height: "30px",
						verticalAlign: "center",
						marginTop: "10px",
					}}
				>
					Swipe to change pictures
				</Typography>
			) : (
				<div style={{ height: "30px" }} />
			)}
			<div className="projectDesc">
				<Typography>
					The Gonzalo Law User Portal was built for a local Gainesville law firm
					so their clients could access their accounts, look at their invoices,
					contact the lawyers assigned to their case, view appointments and
					events, and track the progress of their case. I developed both the
					backend and frontend along with 4 other people on my team utilizing an
					array of tools including Mailgun API, Passport.js, Mongo-Seeding API,
					Node Quickbooks API, and more.
				</Typography>
			</div>
		</Modal>
	);

	const pPalCarouselRef = useRef();
	const pPalModal = (
		<Modal
			centered
			title="Protest Pal"
			visible={pPalModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			footer={
				<Button
					href="https://github.com/TylerMetzger/safety-app"
					target="_blank"
					type="primary"
				>
					<GithubFilled style={{ fontSize: "18px" }} />
					Github
				</Button>
			}
		>
			<Row justify="center" align="middle">
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretLeftOutlined
						className="leftArrow arrow"
						onClick={() => pPalCarouselRef.current.prev()}
					/>
				</Col>
				<Col span={windowWidth < 425 ? 24 : 20}>
					<div className="carouselWrapper">
						<Carousel ref={pPalCarouselRef}>
							<img
								className="carouselPicture"
								src={pPalMapPage}
								alt="pPalMapPage"
							/>
							<img
								className="carouselPicture"
								src={pPalMapPageModalOpened}
								alt="pPalMapPageModalOpened"
							/>
							<img
								className="carouselPicture"
								src={pPalResources}
								alt="pPalResources"
							/>
							<img
								className="carouselPicture"
								src={pPalSafetyTips}
								alt="pPalSafetyTips"
							/>
						</Carousel>
					</div>
				</Col>
				<Col span={windowWidth < 425 ? 0 : 2}>
					<CaretRightOutlined
						className="rightArrow arrow"
						onClick={() => pPalCarouselRef.current.next()}
					/>
				</Col>
			</Row>
			{windowWidth <= 425 ? (
				<Typography
					style={{
						color: "rgba(0,0,0,.4)",
						textAlign: "center",
						height: "30px",
						verticalAlign: "center",
						marginTop: "10px",
					}}
				>
					Swipe to change pictures
				</Typography>
			) : (
				<div style={{ height: "30px" }} />
			)}
			<div className="projectDesc">
				<Typography>
					Protest Pal is a full-stack web app that utilizes Google Maps API to
					map out protests in the United States. The website purposefully does
					not use any cookies or account saving as to give the users as much
					privacy as possible. Along with other helpful features such as extra
					resources or tips for staying safe during a protest, the map is
					interactive and clicking on a marker gives a detailed description of a
					protest's date, time, location, cause, organizer, and more.
				</Typography>
			</div>
		</Modal>
	);

	const mySiteModal = (
		<Modal
			centered
			title="Personal Website"
			visible={mySiteModalVisible}
			onOk={() => handleCardClick(-1)}
			onCancel={() => handleCardClick(-1)}
			maskStyle={{ backdropFilter: "blur(5px)" }}
			footer={
				<Button
					href="https://github.com/TylerMetzger/personal-website"
					target="_blank"
					type="primary"
				>
					<GithubFilled style={{ fontSize: "18px" }} />
					Github
				</Button>
			}
		>
			<Row justify="center" align="middle">
				<Col span={20}>
					<img
						className="carouselPicture"
						src={mySiteProjects}
						style={{ boxShadow: "0px 0px 20px 5px var(--tertiary)" }}
						alt="mySite"
					/>
				</Col>
			</Row>
			<div style={{ height: "30px" }} />
			<div className="projectDesc">
				<Typography>
					Pictures are a little redundant right? Building my own website helped
					me to not only experiment with new and fun frontend technologies, it
					allowed me to express myself through code. I don't consider myself
					much of a designer, but by using tools such as Ant Design, React
					Scroll, Animate on Scroll, and Trianglify I was able to put some ideas
					together.
				</Typography>
			</div>
		</Modal>
	);

	return (
		<div id="projects">
			<div style={{ height: "calc(30vh - 47.6px)" }} />
			<Row justify="center" align="middle" id="projectsTitleRow">
				<Col span={24}>
					<Typography
						className="projectsTitle"
						data-aos="fade-up"
						data-aos-duration={1200}
					>
						My Projects
					</Typography>
				</Col>
			</Row>
			<div style={{ height: "50px" }} />
			<Row align="middle" className="projectsRow">
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={0}
				>
					<Card
						hoverable
						onClick={() => handleCardClick(0)}
						className="projectCard"
						cover={
							<div className="coverWrapper">
								<img
									alt="Gonzalo Law Logo"
									className="projectCover"
									src={gonzaloLawLogo}
								/>
							</div>
						}
						bordered={true}
					>
						<Divider className="projectsDivider" />
						<Card.Meta
							title="Gonzalo Law User Portal"
							description="Click to learn more"
						/>
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
						className="projectCard"
						cover={
							<div className="coverWrapper">
								<img
									alt="Protest Pal Logo"
									className="projectCover"
									src={pPalLogo}
								/>
							</div>
						}
						bordered={true}
					>
						<Divider className="projectsDivider" />
						<Card.Meta title="Protest Pal" description="Click to learn more" />
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
						className="projectCard"
						cover={
							<div className="coverWrapper">
								<img
									alt="Personal Website Logo"
									className="projectCover"
									src={personalWebsiteLogo}
								/>
							</div>
						}
						bordered={true}
					>
						<Divider className="projectsDivider" />
						<Card.Meta
							title="Personal Website"
							description="Click to learn more"
						/>
					</Card>
				</Col>
				<Col
					flex={1}
					data-aos="fade-up"
					data-aos-duration={1200}
					data-aos-delay={600}
				>
					<Card
						className="wipCard"
						cover={
							<div className="coverWrapper">
								<IoIosBuild className="projectCover" />
							</div>
						}
						bordered={true}
					>
						<Divider className="projectsDivider" />
						<Card.Meta title="Smash Bot" description="Coming soon!" />
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
