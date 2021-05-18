import { useDispatch } from "react-redux";
import { addEntryRedux, updateEntryRedux } from "../actions/entries.actions";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import { closeEditModal } from "../actions/modals.ections";

function useEntryDetails(desc = "", val = "", isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal);
    resetValues();
  };

  const addEntry = () => {
    dispatch(
      addEntryRedux({
        id: v4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  };

  const resetValues = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
    updateEntry,
  };
}

export default useEntryDetails;
