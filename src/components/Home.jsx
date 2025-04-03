import React from "react";
import { useNotes } from "../context/NotesContext";
import image1 from "../assets/image1.gif";

function Home() {
  const { notes } = useNotes(); 

  return (
    <div className="">
            <div className="w-full">
        <img src={image1} alt="Header" className="w-full h-auto " />
      </div>
      <h2 className="text-xl flex justify-center items-center text-[40px] font-bold m-10  ">All Notes</h2>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {notes.map((item) => (
          <div
            key={item.id}
            className="w-[300px] h-auto bg-white  rounded-lg p-5 flex flex-col justify-between border-2"
          >
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.body}</p>
           <div className="flex gap-10">
           <button className="bg-blue-600 px-4 py-2 rounded">View</button>
           <button className="bg-red-500 px-4 py-2 rounded">Delete</button>
           </div>
          </div>
        ))}

      
      </div>

    </div>
  );
}

export default Home;
