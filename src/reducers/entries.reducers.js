import entriesTypes from "../actions/entries.actions";

const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case entriesTypes.POPULATE_ENTRIES:
      return action.payload;
    case entriesTypes.ADD_ENTRY:
      const newEntries = state.concat({ ...action.payload });
      return newEntries;
    case entriesTypes.REMOVE_ENTRY_RESULT:
      const newEntriesf = state.filter(
        (entry) => entry.id !== action.payload.id
      );
      return newEntriesf;
    case entriesTypes.UPDATE_ENTRY:
      const newEntriesu = [...state];
      const index = newEntriesu.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntriesu[index] = { ...action.payload.entry };
      return newEntriesu;
    default:
      return state;
  }
};

export default reducer;

var initialEntries = [];
