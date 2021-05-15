import React from "react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import { Form } from "semantic-ui-react";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          placeholder="Куда делось бабло ?"
          icon="tags"
          width={12}
          label="Описание"
        />
        <Form.Input
          width={4}
          label="Сумма"
          placeholder="1000"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
