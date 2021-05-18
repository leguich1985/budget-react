import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { closeEditModal } from "../actions/modals.ections";
import useEntryDetails from "../hooks/useEntryDetails";
import EntryForm from "./EntryForm";

function ModalEdit({ isOpen, description, value, isExpense, id }) {
  const dispatch = useDispatch();
  const entryUpdate = useEntryDetails(description, value, isExpense);
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entrie</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryUpdate.description}
          setDescription={entryUpdate.setDescription}
          value={entryUpdate.value}
          setValue={entryUpdate.setValue}
          isExpense={entryUpdate.isExpense}
          setIsExpense={entryUpdate.setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button primary onClick={() => entryUpdate.updateEntry(id)}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
