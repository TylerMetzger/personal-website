import "./Header.css";
import React, { useState } from "react";
import { Menu, Affix, Switch, Row, Col } from "antd";
import { Link } from "react-scroll";
import {
	PictureOutlined,
	CodeOutlined,
	UserOutlined,
	BulbOutlined,
	PaperClipOutlined,
} from "@ant-design/icons";
import { useWindowSize, windowSizes } from "../../util/useWindowSize.js";

const Header = (props) => {
	const windowWidth = useWindowSize()[0];
	const [currentMenuItem, setCurrentMenuItem] = useState("");
	const [picIconStyle, setPicIconStyle] = useState({
		transition: "all 150ms ease-in",
		opacity: 1,
		color: "var(--tertiary)",
	});
	const [codeIconStyle, setCodeIconStyle] = useState({
		transition: "all 150ms ease-in",
		opacity: 0.25,
		color: "var(--tertiary)",
	});

	const onNewActive = (e) => {
		setCurrentMenuItem(e);
	};

	const handleToggle = (checked) => {
		props.setToggled(checked);
		setPicIconStyle({
			transition: "all 150ms ease-in",
			opacity: checked ? 0.25 : 1,
			color: "var(--tertiary)",
		});
		setCodeIconStyle({
			transition: "all 150ms ease-in",
			opacity: checked ? 1 : 0.25,
			color: "var(--tertiary)",
		});
	};

	const offset = window.innerHeight * 0.2 - 47.6;

	if (windowWidth >= windowSizes.tablet) {
		return (
			<Affix>
				<Row className="headerRow">
					<Col flex="45px">
						<Link
							to="intro"
							activeClass="active" //class of the active div is "active"
							spy={true} //open link only after div is scrolled to
							smooth={true} //smooth
							offset={-47.6} //size of header
							duration={500} //500 ms to scroll
							onSetActive={onNewActive}
						>
							<img
								src={require("../../assets/logos/logoOutline.png")}
								alt="logo"
								className="logo"
							/>
						</Link>
					</Col>
					<Col span={14}>
						<Menu
							mode="horizontal"
							selectedKeys={currentMenuItem}
							className="headerMenu"
						>
							<Menu.Item key="about" icon={<UserOutlined />}>
								<Link
									to="about"
									activeClass="active" //class of the active div is "active"
									spy={true} //open link only after div is scrolled to
									smooth={true} //smooth
									offset={offset} //size of header
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
									offset={offset} //so "My Projects" is center of the screen
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
									offset={offset}
									duration={500}
									onSetActive={onNewActive}
								>
									Resume
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
					<Col pull={0} flex="auto" className="toggleCol">
						<div className="toggleDiv">
							<PictureOutlined style={picIconStyle} className="toggleIconPic" />
							<Switch onChange={handleToggle} className="toggle" />
							<CodeOutlined style={codeIconStyle} className="toggleIconCode" />
						</div>
					</Col>
				</Row>
			</Affix>
		);
	} else if (windowWidth >= windowSizes.mobileM) {
		return (
			<Affix>
				<Row className="headerRow">
					<Col flex="45px">
						<Link
							to="intro"
							activeClass="active" //class of the active div is "active"
							spy={true} //open link only after div is scrolled to
							smooth={true} //smooth
							offset={-47.6} //size of header
							duration={500} //500 ms to scroll
							onSetActive={onNewActive}
						>
							<img
								src={require("../../assets/logos/logoOutline.png")}
								alt="logo"
								className="logo"
							/>
						</Link>
					</Col>
					<Col span={14}>
						<Menu
							mode="horizontal"
							selectedKeys={currentMenuItem}
							className="headerMenu"
						>
							<Menu.Item key="about" icon={<UserOutlined />}>
								<Link
									to="about"
									activeClass="active" //class of the active div is "active"
									spy={true} //open link only after div is scrolled to
									smooth={true} //smooth
									offset={offset} //size of header
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
									offset={offset} //so "My Projects" is center of the screen
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
									offset={offset}
									duration={500}
									onSetActive={onNewActive}
								/>
							</Menu.Item>
						</Menu>
					</Col>
					<Col pull={0} flex="auto" className="toggleCol">
						<div className="toggleDiv">
							<PictureOutlined style={picIconStyle} className="toggleIconPic" />
							<Switch onChange={handleToggle} className="toggle" />
							<CodeOutlined style={codeIconStyle} className="toggleIconCode" />
						</div>
					</Col>
				</Row>
			</Affix>
		);
	} else {
		return (
			<Affix>
				<Row className="headerRow">
					<Col flex={"45px"} span={windowWidth < 250 ? 0 : ""}>
						<img
							src={require("../../assets/logos/logoOutline.png")}
							alt="logo"
							className="logo"
						/>
					</Col>
					<Col flex="auto">
						<Menu
							mode="horizontal"
							selectedKeys={currentMenuItem}
							className="headerMenu"
						>
							<Menu.Item key="about" icon={<UserOutlined />}>
								<Link
									to="about"
									activeClass="active" //class of the active div is "active"
									spy={true} //open link only after div is scrolled to
									smooth={true} //smooth
									offset={offset} //size of header
									duration={500} //500 ms to scroll
									onSetActive={onNewActive}
								></Link>
							</Menu.Item>
							<Menu.Item key="projects" icon={<BulbOutlined />}>
								<Link
									to="projects"
									activeClass="active"
									spy={true}
									smooth={true}
									offset={offset} //so "My Projects" is center of the screen
									duration={500}
									onSetActive={onNewActive}
								></Link>
							</Menu.Item>
							<Menu.Item key="resume" icon={<PaperClipOutlined />}>
								<Link
									to="resume"
									activeClass="active"
									spy={true}
									smooth={true}
									offset={offset}
									duration={500}
									onSetActive={onNewActive}
								></Link>
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
			</Affix>
		);
	}
};

export default Header;
