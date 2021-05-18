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
import axios from "axios";

function App() {
  const entries = useSelector((state) => state.entries);
  const { isOpen, id } = useSelector((state) => state.modals);
  const [entry, setEntry] = useState();
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

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

  async function fetchInitialData() {
    const result = await axios.get("http://localhost:3001/entries");
    console.log(result);
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalace title="Your Balance" value={total} size="small" />
      <DisplayBalances income={income} expense={expense} />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
