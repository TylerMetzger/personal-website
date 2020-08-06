import "./Resume.css";
import React, { useState } from "react";
import { Typography, Col, Row } from 'antd'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"


const Resume = (props) => {
    const windowWidth = useWindowSize()[0];

    const [titleStyle, setTitleStyle] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [educationStyle, setEducationStyle] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [projectsStyle, setProjectsStyle] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [involvementStyle, setInvolvementStyle] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [skillsStyle, setSkillsStyle] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })

    const columnSizing = () => { //this is for different sizings among rendering layouts
        if (windowWidth >= windowSizes.laptopL) {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('divider').clientHeight + -1 * document.getElementById('intro').clientHeight + -1 * document.getElementById('projects').clientHeight
            }
        }
        else if (windowWidth >= windowSizes.tablet) {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('divider').clientHeight + -1 * document.getElementById('intro').clientHeight + -1 * document.getElementById('projects').clientHeight
            }
        } else {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('divider').clientHeight + -1 * document.getElementById('intro').clientHeight + -1 * document.getElementById('projects').clientHeight
            }
        }
    }

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const isVisible = currPos.y < fadeDetails.startingFade

            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 800ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(titleStyle)) return

            setTitleStyle(shouldBeStyle)
        },
        [titleStyle]
    )
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 0 * fadeDetails.durationDistance + 0 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(educationStyle)) return

            setEducationStyle(shouldBeStyle)
        },
        [educationStyle]
    )
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 1 * fadeDetails.durationDistance + 1 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(projectsStyle)) return

            setProjectsStyle(shouldBeStyle)
        },
        [projectsStyle]
    )
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 2 * fadeDetails.durationDistance + 2 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(involvementStyle)) return

            setInvolvementStyle(shouldBeStyle)
        },
        [involvementStyle]
    )
    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 3 * fadeDetails.durationDistance + 3 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(skillsStyle)) return

            setSkillsStyle(shouldBeStyle)
        },
        [skillsStyle]
    )

    if (windowWidth <= windowSizes.tablet) {
        return (
            <div id="resume">
                <Typography
                    className="resumeTitle"
                    style={titleStyle}
                    id="resumeTitle"
                >
                    Resume
                </Typography>

                <div style={educationStyle} className="resumeDetails">
                    <Row>
                        <Col span={24} offset={0} >
                            <Typography.Title level={3} style={{ textAlign: 'center' }}> Education </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>University of Florida</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11} offset={1} >
                            <Typography >Honors College</Typography>
                        </Col>
                        <Col span={12} pull={1} style={{ textAlign: 'right' }}>
                            <Typography >August 2018 – Present</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Bachelor of Computer Science: Expected May 2022 </li>
                                <li>Minor: Economics</li>
                                <li>GPA: 3.83</li>
                                <li>Related Coursework: Data Structures, Computer Organization, Operating Systems, Software Engineering</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={projectsStyle} className="resumeDetails">
                    <Row>
                        <Col span={24} offset={0} >
                            <Typography.Title level={3} style={{ textAlign: 'center' }}> Projects </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Gonzalo Law User Portal</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Work on backend user and admin models, data access objects, controllers, and routes</li>
                                <li>Correspond with several team members and a client</li>
                                <li>Participate in agile production using sprints to demo work with client</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Personal Website</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography style={{ float: 'left' }}>Protest Pal</Typography><br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={involvementStyle} className="resumeDetails">
                    <Row>
                        <Col span={24} offset={0} >
                            <Typography.Title level={3} style={{ textAlign: 'center' }}> Involvement </Typography.Title>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Software Engineering Club</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11} offset={1} >
                            <Typography style={{ float: 'left' }}>Member</Typography>
                        </Col>
                        <Col span={12} pull={1} style={{ textAlign: 'right' }}>
                            <Typography style={{ float: 'right' }}>November 2019 – Present</Typography><br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={skillsStyle} className="resumeDetails">
                    <Row>
                        <Col span={24} offset={0} >
                            <Typography.Title level={3} style={{ textAlign: 'center' }}> Technical Skills </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Languages</Typography> <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Frameworks</Typography> <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Tools</Typography> <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

            </div >
        );
    }
    else {
        return (
            <div id="resume">
                <Typography
                    className="resumeTitle"
                    style={titleStyle}
                    id="resumeTitle"
                >
                    Resume
                </Typography>

                <div style={educationStyle} className="resumeDetails">
                    <Row>
                        <Col span={23} offset={1} >
                            <Typography.Title level={3} > Education </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>University of Florida</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11} offset={1} >
                            <Typography >Honors College</Typography>
                        </Col>
                        <Col span={12} pull={1} style={{ textAlign: 'right' }}>
                            <Typography >August 2018 – Present</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Bachelor of Computer Science: Expected May 2022 </li>
                                <li>Minor: Economics</li>
                                <li>GPA: 3.83</li>
                                <li>Related Coursework: Data Structures, Computer Organization, Operating Systems, Software Engineering</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={projectsStyle} className="resumeDetails">
                    <Row>
                        <Col span={23} offset={1} >
                            <Typography.Title level={3}> Projects </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Gonzalo Law User Portal</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Work on backend user and admin models, data access objects, controllers, and routes</li>
                                <li>Correspond with several team members and a client</li>
                                <li>Participate in agile production using sprints to demo work with client</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Personal Website</Typography><br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography style={{ float: 'left' }}>Protest Pal</Typography><br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={involvementStyle} className="resumeDetails">
                    <Row>
                        <Col span={23} offset={1} >
                            <Typography.Title level={3}> Involvement </Typography.Title>

                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Software Engineering Club</Typography>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={11} offset={1} >
                            <Typography style={{ float: 'left' }}>Member</Typography>
                        </Col>
                        <Col span={12} pull={1} style={{ textAlign: 'right' }}>
                            <Typography style={{ float: 'right' }}>November 2019 – Present</Typography><br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div style={skillsStyle} className="resumeDetails">
                    <Row>
                        <Col span={23} offset={1} >
                            <Typography.Title level={3}> Technical Skills </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Languages</Typography> <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Frameworks</Typography> <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={23} offset={1}>
                            <Typography>Tools</Typography> <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col span={20} offset={2} >
                            <ul>
                                <li>Details</li>
                            </ul>
                        </Col>
                    </Row>
                </div>

            </div >
        )
    }
};

export default Resume;