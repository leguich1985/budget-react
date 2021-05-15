import React from "react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, deleteEntry, editEntry }) {
  return (
    <>
      {entries.map(({ id, ...props }) => (
        <EntryLine
          {...props}
          key={id}
          deleteEntry={deleteEntry}
          id={id}
          editEntry={editEntry}
        />
      ))}
    </>
  );
}

export default EntryLines;
