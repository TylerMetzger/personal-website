import "./Projects.css";
import React, { useState } from "react";
import { Typography, Card, Row, Col, Button, Carousel, Divider } from "antd";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { GithubFilled } from '@ant-design/icons'
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"

const ProjectWrapper = (props) => {
    const windowWidth = useWindowSize()[0];

    const [row1Style, setRow1Style] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [row2Style, setRow2Style] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })
    const [row3Style, setRow3Style] = useState({
        transition: 'all 400ms ease-in',
        opacity: 0
    })

    const gridStyle = {
        width: '100%'
    };

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = props.columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 0 * fadeDetails.durationDistance + 0 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(row1Style)) return

            setRow1Style(shouldBeStyle)
        },
        [row1Style]
    )

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = props.columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 1 * fadeDetails.durationDistance + 1 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(row2Style)) return

            setRow2Style(shouldBeStyle)
        },
        [row2Style]
    )

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const fadeDetails = props.columnSizing();
            const startingFade = fadeDetails.startingFade - 0.5 * window.innerHeight + 2 * fadeDetails.durationDistance + 2 * fadeDetails.distanceBetweenProjects;
            const isVisible = currPos.y < startingFade && currPos.y > startingFade + fadeDetails.durationDistance;
            const shouldBeStyle = {
                visibility: isVisible ? 'visible' : 'hidden',
                transition: `all 400ms ${isVisible ? 'ease-in' : 'ease-out'}`,
                opacity: isVisible ? '1' : '0'
            }

            if (JSON.stringify(shouldBeStyle) === JSON.stringify(row3Style)) return

            setRow3Style(shouldBeStyle)
        },
        [row3Style]
    )

    if (windowWidth > windowSizes.mobileL + 5) {
        return (
            <div>
                <Row justify="center">
                    <Col span={24} offset={0} className="projectRow" style={row1Style}>
                        <Card hoverable={false} title="Project 1" bordered={false}>
                            <Row>
                                <Col span={11}>
                                    <Carousel dotPosition="right">
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                    </Carousel>
                                </Col>
                                <Col span={1} offset={1}>
                                    <Divider type="vertical" style={{ height: "100%" }} />
                                </Col>
                                <Col span={11}>
                                    <Typography className="cardDetails">
                                        1111111111111111111111111 1111111111111111111111111 1111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                                    </Typography>
                                </Col>
                            </Row>
                        </Card >
                        <Card size="small" bordered={false} className="bottomBar">
                            <Button>
                                <GithubFilled style={{ fontSize: "18px" }} />
                                GitHub
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="900px" offset={0} className="projectRow" style={row2Style}>
                        <Card hoverable={false} title="Project 2" bordered={false}>
                            <Row>
                                <Col span={11}>
                                    <Carousel dotPosition="right">
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                    </Carousel>
                                </Col>
                                <Col span={1} offset={1}>
                                    <Divider type="vertical" style={{ height: "100%" }} />
                                </Col>
                                <Col span={11}>
                                    <Typography className="cardDetails">
                                        222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
                                    </Typography>
                                </Col>
                            </Row>
                        </Card >
                        <Card size="small" bordered={false} className="bottomBar">
                            <Button>
                                <GithubFilled style={{ fontSize: "18px" }} />
                                GitHub
                            </Button>
                        </Card>
                    </Col>
                </Row>
                <Row justify="center">
                    <Col flex="900px" offset={0} className="projectRow" style={row3Style}>
                        <Card hoverable={false} title="Project 3" bordered={false}>
                            <Row>
                                <Col span={11}>
                                    <Carousel dotPosition="right">
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                        <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                                    </Carousel>
                                </Col>
                                <Col span={1} offset={1}>
                                    <Divider type="vertical" style={{ height: "100%" }} />
                                </Col>
                                <Col span={11}>
                                    <Typography className="cardDetails">
                                        3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
                                    </Typography>
                                </Col>
                            </Row>
                        </Card >
                        <Card size="small" bordered={false} className="bottomBar">
                            <Button>
                                <GithubFilled style={{ fontSize: "18px" }} />
                                GitHub
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
    else {
        return (
            <div>
                <Col span={18} offset={3} className="projectRow" style={row1Style}>
                    <Card hoverable={false} title="Project 1" bordered={false}>
                        <Carousel dotPosition="right">
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                        </Carousel>
                        <Typography className="cardDetails">
                            1111111111111111111111111 1111111111111111111111111 1111111111111111111111111 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                        </Typography>
                    </Card >
                    <Card size="small" bordered={false} className="bottomBar">
                        <Button>
                            <GithubFilled style={{ fontSize: "18px" }} />
                            GitHub
                    </Button>
                    </Card>
                </Col>
                <Col span={18} offset={3} className="projectRow" style={row2Style}>
                    <Card hoverable={false} title="Project 2" bordered={false}>
                        <Carousel dotPosition="right">
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                        </Carousel>
                        <Typography className="cardDetails">
                            2222222222222222222222222222222222222222222
                        </Typography>
                    </Card >
                    <Card size="small" bordered={false} className="bottomBar">
                        <Button>
                            <GithubFilled style={{ fontSize: "18px" }} />
                            GitHub
                    </Button>
                    </Card>
                </Col>
                <Col span={18} offset={3} className="projectRow" style={row3Style}>
                    <Card hoverable={false} title="Project 3" bordered={false}>
                        <Carousel dotPosition="right">
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                            <img src="https://i.stack.imgur.com/l60Hf.png" className="projectPicture" />
                        </Carousel>
                        <Typography className="cardDetails">
                            3333333333333333333333333333333333333333333333333333333
                        </Typography>
                    </Card >
                    <Card size="small" bordered={false} className="bottomBar">
                        <Button>
                            <GithubFilled style={{ fontSize: "18px" }} />
                            GitHub
                    </Button>
                    </Card>
                </Col>
            </div>
        );
    }
};

export default ProjectWrapper;