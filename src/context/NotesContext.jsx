import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const NotesContext = createContext();

export const useN = () => {
  const context = useContext(NotesContext);

  return context;
};

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=11");
        setNotes(response.data);
      
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
