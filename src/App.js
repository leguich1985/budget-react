import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalace from "./components/DisplayBalace";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const entries = useSelector((state) => state.entries);
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
      // setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    // setEntries(result);
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
      <EntryLines entries={entries} editEntry={editEntry} />
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
