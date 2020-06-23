import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Link from "next/link";
import { useRouter } from "next/router";

const SessionJoiner = () => {
  const router = useRouter();
  const { id } = router.query;
  const [name, setName] = useState("");

  function submit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form inline onSubmit={submit}>
            <FormControl
              size="lg"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="What's your name?"
              className="mr-sm-2"
            ></FormControl>
            <Link href={"/session/" + id + "?name=" + name}>
              <Button
                size="lg"
                variant="primary"
                disabled={name ? false : true}
              >
                Join Session
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SessionJoiner;
