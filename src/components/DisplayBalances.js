import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalace from "./DisplayBalace";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns="2" divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalace title="Income :" value="1253.33" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalace title="Expense :" value="2356.33" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
