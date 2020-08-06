import "./Intro.css";
import React, { useState, useLayoutEffect } from "react";
import { Typography, Grid, Col, Row } from "antd"
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"

const Intro = (props) => {
    const windowWidth = useWindowSize()[0];

    const columnSizing = () => { //this is for different sizings among rendering layouts
        if (!props.toggled) {
            if (windowWidth >= windowSizes.laptopL) {
                return {
                    col1: '400px',
                    col2: '900px',
                    gutter: 0,
                    titleSize: 72,
                    descSize: 18,
                    picStyle: {
                        height: '400px',
                        width: '400px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation'
                    }
                }
            }
            else if (windowWidth >= windowSizes.laptop) {
                return {
                    col1: '325px',
                    col2: '650px',
                    gutter: 0,
                    titleSize: 62,
                    descSize: 18,
                    picStyle: {
                        height: '325px',
                        width: '325px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation',
                        transform: 'translateX(-50%)',
                        left: '50vw'
                    }
                }
            } else if (windowWidth >= windowSizes.tablet) {
                return {
                    col1: '325px',
                    col2: '400px',
                    gutter: 0,
                    titleSize: 62,
                    descSize: 18,
                    picStyle: {
                        height: '325px',
                        width: '325px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation',
                        transform: 'translateX(-50%)',
                        left: '50vw'
                    }
                }
            } else {
                return {
                    col1: '250px',
                    col2: '475px',
                    gutter: 0,
                    titleSize: 56,
                    descSize: 18,
                    picStyle: {
                        height: `min(${windowWidth - 40}px, 450px)`,
                        width: `min(${windowWidth - 40}px, 450px)`,
                        position: 'relative',
                        animationDelay: '0.5s',
                        animationName: 'pictureOfMeAnimationMobile',
                        opacity: '0%',
                        left: '50vw',
                        transform: 'translate(-50%, 90%)'
                    }
                }
            }
        }
        else {
            if (windowWidth >= windowSizes.laptopL) {
                return {
                    col1: '400px',
                    col2: '900px',
                    gutter: 0,
                    titleSize: 72,
                    descSize: 18,
                    picStyle: {
                        height: '400px',
                        width: '400px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation',
                        backgroundColor: '#1E1E1E'
                    }
                }
            }
            else if (windowWidth >= windowSizes.laptop) {
                return {
                    col1: '325px',
                    col2: '650px',
                    gutter: 0,
                    titleSize: 62,
                    descSize: 18,
                    picStyle: {
                        height: '325px',
                        width: '325px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation',
                        transform: 'translateX(-50%)',
                        left: '50vw'
                    }
                }
            } else if (windowWidth >= windowSizes.tablet) {
                return {
                    col1: '325px',
                    col2: '400px',
                    gutter: 0,
                    titleSize: 62,
                    descSize: 18,
                    picStyle: {
                        height: '325px',
                        width: '325px',
                        position: 'absolute',
                        bottom: '-10vh',
                        animationName: 'pictureOfMeAnimation',
                        transform: 'translateX(-50%)',
                        left: '50vw'
                    }
                }
            } else {
                return {
                    col1: '250px',
                    col2: '475px',
                    gutter: 0,
                    titleSize: 56,
                    descSize: 18,
                    picStyle: {
                        height: `min(${windowWidth - 40}px, 450px)`,
                        width: `min(${windowWidth - 40}px, 450px)`,
                        position: 'relative',
                        animationDelay: '0.5s',
                        animationName: 'pictureOfMeAnimationMobile',
                        opacity: '0%',
                        left: '50vw',
                        transform: 'translate(-50%, 90%)'
                    }
                }
            }
        }
    }

    if (!props.toggled) {
        if (windowWidth >= windowSizes.laptopL) { //this is for different rendering layouts
            return (
                <div id="intro">
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
                        <Col
                            offset={0}
                            flex={columnSizing().col1}
                        >
                            <img
                                src="https://i.stack.imgur.com/l60Hf.png"
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            />
                        </Col>
                        <Col
                            offset={1}
                            flex={columnSizing().col2}
                        >
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row>
                </div >
            );
        }
        else if (windowWidth >= windowSizes.tablet) {
            return (
                <div id="intro">
                    <Row justify="center" style={{ paddingTop: '5vh' }}>
                        <Col span={24}>
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                        </Col>
                    </Row>
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
                        <Col
                            offset={0}
                            flex={columnSizing().col1}
                        >
                            <img
                                src="https://i.stack.imgur.com/l60Hf.png"
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            />
                        </Col>
                        <Col
                            offset={1}
                            flex={columnSizing().col2}
                        >
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row>
                </div >
            );
        }
        else {
            return (
                <div id="intro">
                    <Row justify="center" align="middle" style={{ paddingTop: '10vh' }}>
                        <Col span={24}>
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                        </Col>
                    </Row>
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '5vh' }}>
                        <Col span={24} >
                            <img
                                src="https://i.stack.imgur.com/l60Hf.png"
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            />
                        </Col>
                    </Row>
                    <Row justify="center" align="middle" style={{ paddingTop: '5vh', paddingBottom: '10vh' }} >
                        <Col span={24} >
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row >
                </div >
            );
        }
    }
    else {
        if (windowWidth >= windowSizes.laptopL) { //this is for different rendering layouts
            return (
                <div id="intro">
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
                        <Col
                            offset={0}
                            flex={columnSizing().col1}
                        >
                            <div
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            >
                                test
                            </div>
                        </Col>
                        <Col
                            offset={1}
                            flex={columnSizing().col2}
                        >
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row>
                </div >
            );
        }
        else if (windowWidth >= windowSizes.tablet) {
            return (
                <div id="intro">
                    <Row justify="center" style={{ paddingTop: '5vh' }}>
                        <Col span={24}>
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                        </Col>
                    </Row>
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '5vh', paddingBottom: '10vh' }}>
                        <Col
                            offset={0}
                            flex={columnSizing().col1}
                        >
                            <img
                                src="https://i.stack.imgur.com/l60Hf.png"
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            />
                        </Col>
                        <Col
                            offset={1}
                            flex={columnSizing().col2}
                        >
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row>
                </div >
            );
        }
        else {
            return (
                <div id="intro">
                    <Row justify="center" align="middle" style={{ paddingTop: '10vh' }}>
                        <Col span={24}>
                            <Typography className="introTitle" style={{ fontSize: `${columnSizing().titleSize}px` }}>
                                Whatsup, I'm Tyler Metzger
                            </Typography>
                        </Col>
                    </Row>
                    <Row justify="center" gutter={columnSizing().gutter} style={{ paddingTop: '5vh' }}>
                        <Col span={24} >
                            <img
                                src="https://i.stack.imgur.com/l60Hf.png"
                                className="pictureOfMe"
                                style={columnSizing().picStyle}
                            />
                        </Col>
                    </Row>
                    <Row justify="center" align="middle" style={{ paddingTop: '5vh', paddingBottom: '10vh' }} >
                        <Col span={24} >
                            <Typography className="introDetails" style={{ fontSize: `${columnSizing().descSize}px` }}>
                                I love using technology to solve all sorts of problems. <br /> <br />
                                I’m a junior at the University of Florida enrolled in the College of Engineering studying computer science.
                                Right now I'm working on learning full-stack software development and machine learning. <br /> <br />
                                When I’m not working with computers you can find me cooking, rock climbing, or
                                hanging out with friends. If you ever want to talk food or computers, just hit me up.
                            </Typography>
                        </Col>
                    </Row >
                </div >
            );
        }
    }
}



export default Intro;