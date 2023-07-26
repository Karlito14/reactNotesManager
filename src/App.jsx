import { NotesAPI } from "api/notes-api";
import { Header } from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/note/note-slice";

export function App() {

  const dispatch = useDispatch();
  
  const fetchAllNotes = async () => {
    const noteList = await NotesAPI.fetchAll();
    dispatch(setNoteList(noteList));
  };

  useEffect(() => {
    fetchAllNotes();
  }, [])

  return (
      <div className="container-fluid">
        <Header />
        <Outlet />
      </div>
  )
}
