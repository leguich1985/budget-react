import React from "react";
import { Statistic } from "semantic-ui-react";

function DisplayBalace({ title, value, color = "black", size = "tiny" }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{title}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default DisplayBalace;
