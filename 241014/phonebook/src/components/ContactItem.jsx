import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;
const Name = styled.h4``;
const Number = styled.p``;

const ContactItem = ({ item }) => {
  return (
    <Wrapper>
      <Row>
        <Col lg={2}>
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
            alt="user"
          />
        </Col>
        <Col lg={10}>
          <Name>{item.name}</Name>
          <Number>{item.phoneNumber}</Number>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ContactItem;
