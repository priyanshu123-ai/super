import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Notes from "./components/Notes";
import NotesProvider from "./context/NotesContext"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <NotesProvider>  
      <div className={darkMode ? "bg-gray-900 " : "bg-white "}>
        <BrowserRouter>
          <Nav darkMode={darkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Notes" element={<Notes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NotesProvider>
  );
}

export default App;
