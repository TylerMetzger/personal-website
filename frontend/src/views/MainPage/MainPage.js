import "./MainPage.css";
import React, { useState } from "react";

import Intro from "../../components/Intro/Intro.js";
import Projects from "../../components/Projects/Projects.js";
import Resume from "../../components/Resume/Resume.js";
import Background from "../../components/Background/Background.js"

const MainPage = (props) => {
    return (
        <div>
            <Background />
            <Intro toggled={props.toggled} />
            <Projects toggled={props.toggled} />
            <div id="divider" style={{ height: '50vh' }} />
            <Resume toggled={props.toggled} />
        </div>
    );
};

export default MainPage;