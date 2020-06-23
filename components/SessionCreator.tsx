import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {
  CreateSession,
  SetParticipantName,
  GetParticipantName,
} from "../services/Session";

const SessionCreator = () => {
  const [name, setName] = useState(GetParticipantName());

  function set(e) {
    setName(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    SetParticipantName(name);
    CreateSession();
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form inline onSubmit={submit}>
            <FormControl
              size="lg"
              onChange={set}
              type="text"
              placeholder="What's your name?"
              className="mr-sm-2"
            ></FormControl>
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={name ? false : true}
            >
              Start Session
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SessionCreator;
