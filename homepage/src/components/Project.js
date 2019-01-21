import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Media, Image } from "react-bootstrap";
// images are 1440x400

class Project extends Component {
  renderContent = () => {
    if (this.props.link === "oscar watch") {
      return (
        <Row>
          <Col md={12}>
            <MainPic>
              <a href="http://www.theoscarwatch.com/">
                <Image responsive src={this.props.image} />
                <Title>{this.props.name}</Title>
              </a>
            </MainPic>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col md={12}>
            <MainPic>
              <a href={this.props.link + ".html"}>
                <Image responsive src={this.props.image} />
                <Title>{this.props.name}</Title>
              </a>
            </MainPic>
          </Col>
        </Row>
      );
    }
  };
  render() {
    return this.renderContent();
  }
}

const MainPic = styled.div`
  opacity: 0.7;
  width: 100%;
  height: 33%;
  position: relative;

  :hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  color: white;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 20px;
    top: 20%;
  }
`;

export default Project;
