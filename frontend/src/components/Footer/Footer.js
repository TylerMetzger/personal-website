import "./Footer.css";
import React, { useState } from "react";
import { Row, Col, Affix, Menu } from 'antd'
import { GithubOutlined, MailOutlined, LinkedinOutlined } from '@ant-design/icons'


const Footer = () => {
    return (
        <Affix offsetBottom={0}>
            <Row className="footerRow">
                <Col span={9} offset={15}>
                    <div className="iconDiv">
                        <a href="https://github.com/TylerMetzger" target="_blank" style={{ color: "inherit" }}>
                            <GithubOutlined className="githubIcon" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" style={{ color: "inherit" }}>
                            <LinkedinOutlined className="linkedinIcon" />
                        </a>
                        <a href="mailto:tylermetzger23@gmail.com" target="_blank" style={{ color: "inherit" }}>
                            <MailOutlined className="emailIcon" />
                        </a>
                    </div>
                </Col>
            </Row>
        </Affix>
    );
};

export default Footer;