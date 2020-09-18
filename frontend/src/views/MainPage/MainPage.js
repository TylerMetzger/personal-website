import "./MainPage.css";
import React, { useState } from "react";

import Background from "../../components/Background/Background.js";

import Intro from "../../components/PictureViewComponents/Intro/Intro.js";
import Projects from "../../components/PictureViewComponents/Projects/Projects.js";
import Resume from "../../components/PictureViewComponents/Resume/Resume.js";
import About from "../../components/PictureViewComponents/About/About.js";

import CodeIntro from "../../components/CodeViewComponents/CodeIntro/CodeIntro.js";
import CodeAbout from "../../components/CodeViewComponents/CodeAbout/CodeAbout.js";
import CodeProjects from "../../components/CodeViewComponents/CodeProjects/CodeProjects.js";
import CodeResume from "../../components/CodeViewComponents/CodeResume/CodeResume.js";

const MainPage = (props) => {
	if (!props.toggled) {
		return (
			<div>
				<Background toggle={false} />
				<Intro />
				<About />
				<Projects />
				<Resume />
			</div>
		);
	} else {
		return (
			<div className="codeView">
				<Background toggled={true} />
				<CodeIntro />
				<CodeAbout />
				<CodeProjects />
				<CodeResume />
			</div>
		);
	}
};

export default MainPage;
