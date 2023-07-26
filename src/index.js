import "./global.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteBrowse } from "pages/NoteBrowse/NoteBrowse";
import { Note } from "pages/Note/Note";
import { NoteCreate } from "pages/NoteCreate/NoteCreate";
import { PageNoteFound } from "pages/PageNotFound/PageNoteFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<NoteBrowse />} />
          <Route path="/note/:id" element={<Note />} />
          <Route path="/note/new" element={<NoteCreate />} />
        </Route>
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
