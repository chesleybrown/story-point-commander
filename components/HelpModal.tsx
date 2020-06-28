import React from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SolutionEffortMemo from "./SolutionEffortMemo";
import RiskMemo from "./RiskMemo";
import Alert from "react-bootstrap/Alert";

const HelpModal = (props: ModalProps) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SolutionEffortMemo></SolutionEffortMemo>
        <Alert variant="warning">
          Anything you feel would be greater than <strong>13</strong> story
          points should be broken down into smaller tasks before estimating
          further. Try adding a <strong>discovery task</strong> to help
          understand the <strong>scope of the work</strong> better.
        </Alert>
        <RiskMemo></RiskMemo>
      </Modal.Body>
      <Modal.Footer>
        <Button block onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HelpModal;
