import "./Resume.css";
import React, { useState } from "react";
import { Typography, Col, Row, Divider } from "antd";
import { useWindowSize, windowSizes } from "../../../util/useWindowSize.js";
import resumePDF from "../../../assets/Resume.pdf";

const Resume = (props) => {
	const windowWidth = useWindowSize()[0];

	return (
		<div id="resume">
			<div style={{ height: "calc(30vh - 47.6px)" }} />
			<Typography
				className="resumeTitle"
				id="resumeTitle"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				Resume
			</Typography>
			<Typography
				className="resumeSubtitle"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				Click{" "}
				<a href={resumePDF} target="_blank">
					here
				</a>{" "}
				to download the pdf.
			</Typography>

			<div
				className="resumeDetails"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 24 : 16}
						offset={0}
					>
						<Divider orientation="left" className="resumeDivider">
							Education
						</Divider>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">
							University of Florida
						</Typography>
					</Col>
				</Row>
				<br />
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<span>
							<Typography className="resumeDesc" style={{ float: "left" }}>
								Honors College
							</Typography>
							<Typography className="resumeDesc" style={{ float: "right" }}>
								August 2018 – Present
							</Typography>
							<br />
						</span>
					</Col>
				</Row>
				<Row justify="center">
					<Col span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}>
						<ul>
							<li>Bachelor of Computer Science: Expected May 2022 </li>
							<li>Minor: Economics</li>
							<li>GPA: 3.83</li>
							<li>
								Related Coursework: Data Structures, Computer Organization,
								Operating Systems, Software Engineering
							</li>
						</ul>
					</Col>
				</Row>
			</div>

			<div
				className="resumeDetails"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 24 : 16}
						offset={0}
					>
						<Divider orientation="left" className="resumeDivider">
							Projects
						</Divider>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">
							Gonzalo Law User Portal
						</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>
								Work on backend user and admin models, data access objects,
								controllers, and routes
							</li>
							<li>Correspond with several team members and a client</li>
							<li>
								Participate in agile production using sprints to demo work with
								client
							</li>
						</ul>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Personal Website</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>
								Utilize modern frontend technologies like Ant Design, Animate on
								Scroll, and Trianglify
							</li>
							<li>Deploy website to personal web address and domain name</li>
						</ul>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Protest Pal</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>Map out protests on a map using Google Maps API</li>
							<li>Seed database with test data and connect to frontend</li>
						</ul>
					</Col>
				</Row>
			</div>

			<div
				className="resumeDetails"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 24 : 16}
						offset={0}
					>
						<Divider orientation="left" className="resumeDivider">
							Involvement
						</Divider>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Rock Climbing Club</Typography>
					</Col>
				</Row>
				<br />
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<span>
							<Typography className="resumeDesc" style={{ float: "left" }}>
								Member
							</Typography>
							<Typography className="resumeDesc" style={{ float: "right" }}>
								November 2019 – Present
							</Typography>
							<br />
						</span>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>Compete against other college teams across state</li>
							<li>
								Maintain physical and mental fitness through regimented exercise
							</li>
							<li>
								Practice team-building techniques and motivate fellow members
							</li>
						</ul>
					</Col>
				</Row>
			</div>

			<div
				className="resumeDetails"
				data-aos="fade-up"
				data-aos-duration={1200}
			>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 24 : 16}
						offset={0}
					>
						<Divider orientation="left" className="resumeDivider">
							Technical Skills
						</Divider>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Lanugages</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>C, C++, Java, Javascript, CSS, HTML, Python, Matlab, R</li>
						</ul>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Frameworks</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>Express, React, Node.js</li>
						</ul>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<Typography className="resumeDesc">Tools</Typography>
					</Col>
				</Row>
				<Row justify="center">
					<Col
						span={windowWidth <= windowSizes.mobileL + 15 ? 22 : 14}
						offset={0}
					>
						<ul>
							<li>
								Visual Studio 2019, Visual Studio Code, Git, Git Bash, Github,
								Postman, MongoDB Atlas, Oracle VM Virtualbox, WordPress, Trello
							</li>
						</ul>
					</Col>
				</Row>
			</div>
			<div style={{ height: "calc(30vh - 47.6px)" }} />
		</div>
	);
};

export default Resume;
