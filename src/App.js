import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalace from "./components/DisplayBalace";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalace title="Your Balance" value="1,000.00" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine description="Income" value="$10.00" />
      <EntryLine description="expense" value="$5.00" isExpense />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
