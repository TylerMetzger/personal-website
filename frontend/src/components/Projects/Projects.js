import "./Projects.css";
import React, { useState, us } from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import ProjectWrapper from './ProjectWrapper.js'
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"


const Projects = (props) => {
    const windowWidth = useWindowSize()[0];

    const [titleStyle, setTitleStyle] = useState({
        transition: 'all 800ms ease-in',
        opacity: 0
    })
    const [rowOneStyle, setRowOneStyle] = useState({
        transition: 'all 800ms ease-in',
        opacity: 0
    })
    const [rowTwoStyle, setRowTwoStyle] = useState({
        transition: 'all 800ms ease-in',
        opacity: 0
    })
    const [rowThreeStyle, setRowThreeStyle] = useState({
        transition: 'all 800ms ease-in',
        opacity: 0
    })

    const columnSizing = () => { //this is for different sizings among rendering layouts
        if (windowWidth >= windowSizes.laptopL) {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('intro').clientHeight //max height of first div
            }
        }
        else if (windowWidth >= windowSizes.tablet) {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('intro').clientHeight //max height of first div
            }
        } else {
            return {
                durationDistance: -1500, //amount i want to scroll while project is still visible
                distanceBetweenProjects: -400, //amount i want to scroll between fades
                startingFade: -1 * document.getElementById('intro').clientHeight //max height of first div
            }
        }
    }

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = columnSizing();
            const isVisible = currPos.y < fadeDetails.startingFade && currPos.y > fadeDetails.startingFade - 0.5 * window.innerHeight + 3 * fadeDetails.durationDistance + 2 * fadeDetails.distanceBetweenProjects;

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

    return (
        <div id="projects">
            <Typography
                className="projectsTitle"
                style={titleStyle}
                id="projectsTitle"
            >
                My Projects
            </Typography>
            <ProjectWrapper columnSizing={columnSizing} />

        </div >
    );
};

export default Projects;