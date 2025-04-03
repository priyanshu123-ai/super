import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const NotesContext = createContext();

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
};

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=11");
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
