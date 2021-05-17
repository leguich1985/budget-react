import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalace from "./components/DisplayBalace";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { createStore, combineReducers } from "redux";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [entryId, setEntryId] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const entriesReducer = (state = initialEntries, action) => {
    switch (action.type) {
      case "ADD_ENTRY":
        const newEntries = state.concat({ ...action.payload });
        return newEntries;
      case "REMOVE_ENTRY":
        const newEntriesf = state.filter(
          (entry) => entry.id !== action.payload.id
        );
        return newEntriesf;
      default:
        return state;
    }
  };
  const combinedReducers = combineReducers({
    entries: entriesReducer,
  });
  const store = createStore(combinedReducers);
  store.subscribe(() => console.log("store : ", store.getState()));

  const payload_add = {
    id: 5,
    description: "hello",
    value: 100,
    isExpense: true,
  };

  const addEntryRedux = (payload) => {
    return {
      type: "ADD_ENTRY",
      payload,
    };
  };

  const removeEntryRedux = (id) => {
    return {
      type: "REMOVE_ENTRY",
      payload: { id },
    };
  };

  store.dispatch(addEntryRedux(payload_add));

  store.dispatch(removeEntryRedux(2));

  const deleteEntry = (id) => {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  };

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  };

  const resetEntry = () => {
    setDescription("");
    setValue("");
    setIsExpense(true);
  };

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  const [entries, setEntries] = useState(initialEntries);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    entries.forEach((entry) => {
      if (entry.isExpense) {
        totalExpense += Number(entry.value);
      } else {
        totalIncome += Number(entry.value);
      }
    });
    setTotal(totalIncome - totalExpense);
    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [entries]);
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalace title="Your Balance" value={total} size="small" />
      <DisplayBalances income={income} expense={expense} />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Water bill",
    value: 20,
    isExpense: true,
  },
  {
    id: 3,
    description: "Rent",
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: "Power bill",
    value: 50,
    isExpense: true,
  },
];
