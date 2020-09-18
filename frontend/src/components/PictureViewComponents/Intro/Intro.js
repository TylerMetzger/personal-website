import "./Intro.css";
import React, { useState, useLayoutEffect } from "react";
import { Typography, Grid, Col, Row, Divider } from "antd";

const Intro = (props) => {
	return (
		<div id="intro" className="intro">
			<Row justify="center" align="middle" className="introRow">
				<Col pull={0} span={24}>
					<Typography
						className="introGreeting"
						data-aos="fade-up"
						data-aos-duration={1200}
						data-aos-delay={800}
					>
						What's up, I'm
					</Typography>
					<Typography
						className="introName"
						id="introName"
						data-aos="fade-up"
						data-aos-duration={1200}
						data-aos-delay={1200}
					>
						Tyler Metzger
					</Typography>
				</Col>
			</Row>
		</div>
	);
};

export default Intro;
