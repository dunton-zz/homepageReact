import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col, Media, Image } from "react-bootstrap";
// images are 1440x400

class Project extends Component {
  render() {
    return (
      <Row>
        <Col md={12}>
          <MainPic>
            <a href={this.props.link + ".html"}>
              <Image responsive src={this.props.image} />
              <h2>{this.props.name}</h2>
            </a>
          </MainPic>
        </Col>
      </Row>
    );
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

export default Project;
