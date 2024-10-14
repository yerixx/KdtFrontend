import React, { useState } from "react";
// import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
// reducer로 보내려면 useDispatch 사용!!!!!!!!!
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: { keyword } });
  };
  return (
    <form onSubmit={searchByName}>
      <Row>
        {/* 총 합이 12개 */}
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="Search Name"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit" variant="dark">
            Search
          </Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBar;
