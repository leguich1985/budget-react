import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          placeholder="Куда делось бабло ?"
          icon="tags"
          width={12}
          label="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Сумма"
          placeholder="1000"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          label="is expense"
          toggle
          checked={isExpense}
          onChange={() => setIsExpense((prev) => !prev)}
        />
      </Segment>
    </>
  );
}

export default EntryForm;
