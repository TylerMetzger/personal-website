import "./Header.css";
import React, { useState } from "react";
import { Menu, Affix, Switch, Row, Col } from "antd"
import { Link, Events } from "react-scroll";
import { PictureOutlined, CodeOutlined, UserOutlined, BulbOutlined, PaperClipOutlined } from '@ant-design/icons'
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js"


const Header = (props) => {
    const windowWidth = useWindowSize()[0];
    const [currentMenuItem, setCurrentMenuItem] = useState("");
    const [picIconStyle, setPicIconStyle] = useState({
        transition: 'all 150ms ease-in',
        opacity: 1,
        color: 'var(--charleston-green)'
    })
    const [codeIconStyle, setCodeIconStyle] = useState({
        transition: 'all 150ms ease-in',
        opacity: .25,
        color: 'var(--charleston-green)'
    })

    const onNewActive = e => {
        setCurrentMenuItem(e);
    };

    const handleToggle = (checked) => {
        props.setToggled(checked);
        setPicIconStyle({
            transition: 'all 150ms ease-in',
            opacity: checked ? .25 : 1,
            color: 'var(--charleston-green)'

        });
        setCodeIconStyle({
            transition: 'all 150ms ease-in',
            opacity: checked ? 1 : .25,
            color: 'var(--charleston-green)'
        });
    }

    if (windowWidth >= windowSizes.tablet) {
        return (
            <Affix>
                <Row className="headerRow">
                    <Col flex='45px'>
                        <img src={require("../../assets/logos/logoOutline.png")} alt="logo" style={{ width: '39px', height: '39px', left: '4px', top: '4px', position: 'relative', display: 'inline-block' }} />
                    </Col>
                    <Col span={14} >
                        <Menu mode="horizontal" selectedKeys={currentMenuItem} className="headerMenu">
                            <Menu.Item key="intro" icon={<UserOutlined />}>
                                <Link
                                    to="intro"
                                    activeClass="active" //class of the active div is "active"
                                    spy={true}     //open link only after div is scrolled to
                                    smooth={true}  //smooth
                                    offset={-47.6} //size of header
                                    duration={500} //500 ms to scroll
                                    onSetActive={onNewActive}
                                >
                                    About
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="projects" icon={<BulbOutlined />}>
                                <Link
                                    to="projects"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={49.6} //so "My Projects" is center of the screen
                                    duration={500}
                                    onSetActive={onNewActive}
                                >
                                    Projects
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="resume" icon={<PaperClipOutlined />}>
                                <Link
                                    to="resume"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={47.6}
                                    duration={500}
                                    onSetActive={onNewActive}
                                >
                                    Resume
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col pull={0} flex='auto' className="toggleCol">
                        <div className="toggleDiv" >
                            <PictureOutlined style={picIconStyle} className="toggleIconPic" />
                            <Switch onChange={handleToggle} className="toggle" />
                            <CodeOutlined style={codeIconStyle} className="toggleIconCode" />
                        </div>
                    </Col>
                </Row>
            </Affix >
        );
    }
    else if (windowWidth >= windowSizes.mobileM) {
        return (
            <Affix>
                <Row className="headerRow">
                    <Col flex='45px'>
                        <img src={require("../../assets/logos/logoOutline.png")} style={{ width: '39px', height: '39px', left: '4px', top: '4px', position: 'relative', display: 'inline-block' }} />
                    </Col>
                    <Col span={14}>
                        <Menu mode="horizontal" selectedKeys={currentMenuItem} className="headerMenu">
                            <Menu.Item key="intro" icon={<UserOutlined />}>
                                <Link
                                    to="intro"
                                    activeClass="active" //class of the active div is "active"
                                    spy={true}     //open link only after div is scrolled to
                                    smooth={true}  //smooth
                                    offset={-47.6} //size of header
                                    duration={500} //500 ms to scroll
                                    onSetActive={onNewActive}
                                />
                            </Menu.Item>
                            <Menu.Item key="projects" icon={<BulbOutlined />}>
                                <Link
                                    to="projects"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={47.6} //so "My Projects" is center of the screen
                                    duration={500}
                                    onSetActive={onNewActive}
                                />
                            </Menu.Item>
                            <Menu.Item key="resume" icon={<PaperClipOutlined />}>
                                <Link
                                    to="resume"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={47.6}
                                    duration={500}
                                    onSetActive={onNewActive}
                                />
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col pull={0} flex='auto' className="toggleCol">
                        <div className="toggleDiv">
                            <PictureOutlined style={picIconStyle} className="toggleIconPic" />
                            <Switch onChange={handleToggle} className="toggle" />
                            <CodeOutlined style={codeIconStyle} className="toggleIconCode" />
                        </div>
                    </Col>
                </Row>
            </Affix >
        );
    }
    else {
        return (
            <Affix>
                <Row className="headerRow">
                    <Col flex={'45px'} span={windowWidth < 250 ? 0 : ''}>
                        <img src={require("../../assets/logos/logoOutline.png")} style={{ width: '39px', height: '39px', left: '4px', top: '4px', position: 'relative', display: 'inline-block' }} />
                    </Col>
                    <Col flex='auto'>
                        <Menu mode="horizontal" selectedKeys={currentMenuItem} className="headerMenu">
                            <Menu.Item key="intro" icon={<UserOutlined />}>
                                <Link
                                    to="intro"
                                    activeClass="active" //class of the active div is "active"
                                    spy={true}     //open link only after div is scrolled to
                                    smooth={true}  //smooth
                                    offset={-47.6} //size of header
                                    duration={500} //500 ms to scroll
                                    onSetActive={onNewActive}
                                >
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="projects" icon={<BulbOutlined />}>
                                <Link
                                    to="projects"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={47.6} //so "My Projects" is center of the screen
                                    duration={500}
                                    onSetActive={onNewActive}
                                >
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="resume" icon={<PaperClipOutlined />}>
                                <Link
                                    to="resume"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={47.6}
                                    duration={500}
                                    onSetActive={onNewActive}
                                >
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col pull={0} span={0} className="toggleCol">
                        <div className="toggleDiv">
                            <PictureOutlined style={picIconStyle} className="toggleIconPic" />
                            <Switch onChange={handleToggle} className="toggle" />
                            <CodeOutlined style={codeIconStyle} className="toggleIconCode" />
                        </div>
                    </Col>
                </Row>
            </Affix >
        );
    }
};

export default Header;