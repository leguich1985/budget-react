import { call, put, take } from "@redux-saga/core/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";

export function* deleteEntrySaga() {
  while (true) {
    const { payload } = yield take(entriesTypes.REMOVE_ENTRY);
    yield call(deleteEntrie, payload.id);
    put({
      type: "REMOVE_ENTRY_RESULT",
      payload: { id: payload.id },
    });
  }
}

function deleteEntrie(id) {
  axios.delete(`http://localhost:3001/entries/${id}`);
}
