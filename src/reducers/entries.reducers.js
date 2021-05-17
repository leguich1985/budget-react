const reducer = (state = initialEntries, action) => {
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

export default reducer;

var initialEntries = [
  {
    id: 1,
    description: "Work income redux",
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
