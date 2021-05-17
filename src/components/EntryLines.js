import React from "react";
import EntryLine from "./EntryLine";

function EntryLines({ entries, editEntry }) {
  return (
    <>
      {entries.map(({ id, ...props }) => (
        <EntryLine {...props} key={id} id={id} editEntry={editEntry} />
      ))}
    </>
  );
}

export default EntryLines;
