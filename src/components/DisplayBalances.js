import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalace from "./DisplayBalace";

function DisplayBalances({ income, expense }) {
  return (
    <Segment textAlign="center">
      <Grid columns="2" divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalace title="Income :" value={income} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalace title="Expense :" value={expense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
