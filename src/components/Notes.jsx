import React, { useState } from "react";
import { useNotes } from "../context/NotesContext";
import axios from "axios";

function Notes() {
  const { notes, setNotes } = useNotes();
  const [newNote, setNewNote] = useState("");

  const addNote = async (e) => {
    e.preventDefault();
  

     {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts?_limit=11s", {
        title: newNote,
      
      });

      setNotes([response.data, ...notes]); 
      setNewNote(""); 
    } 
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Add a Note</h2>
      <form onSubmit={addNote} className="mb-5">
        <input
          type="text"
          placeholder="Enter note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="p-2 border mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
    </div>
  );
}

export default Notes;
