import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { CreateSession } from "../services/Session";

const SessionCreator = () => {
  const [participantName, setParticipantName] = useState("");

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setParticipantName(e.target.value);
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    CreateSession(participantName);
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form inline onSubmit={submit}>
            <FormControl
              size="lg"
              onChange={change}
              type="text"
              placeholder="What's your name?"
              className="mr-sm-2"
            ></FormControl>
            <Button
              type="submit"
              size="lg"
              variant="primary"
              disabled={participantName ? false : true}
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
