import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { StoryPointDetail } from "../services/StoryPointOptions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

type Props = {
  current?: StoryPointDetail;
  option: StoryPointDetail;
  onClick: (detail: StoryPointDetail) => void;
};

const SelectableCard = (props: Props) => {
  function click() {
    props.onClick(props.option);
  }

  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id={"selectable-card-tooltip-" + props.option.id}>
          {props.option.description}
        </Tooltip>
      }
    >
      <Button
        style={{ display: "flex", justifyContent: "center" }}
        onClick={click}
        variant={
          props.current && props.current.id == props.option.id
            ? "primary"
            : "secondary"
        }
        block
      >
        <strong>
          {props.option.category}{" "}
          {props.option.value || "+" + props.option.modifier}
        </strong>
        <span
          style={{
            fontSize: "0.75em",
            lineHeight: "2em",
            paddingLeft: "1em",
            verticalAlign: "center",
            textAlign: "left",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flex: 1,
            overflow: "hidden",
          }}
        >
          {props.option.description}
        </span>
      </Button>
    </OverlayTrigger>
  );
};

export default SelectableCard;
