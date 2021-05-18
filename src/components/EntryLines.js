import React from "react";
import EntryLine from "./EntryLine";

function EntryLines({ entries }) {
  return (
    <>
      {entries.map(({ id, ...props }) => (
        <EntryLine {...props} key={id} id={id} />
      ))}
    </>
  );
}

export default EntryLines;
