import React, { createContext } from "react";

function MyContext() {
  const Bd = [
    { id: 0, date: 5, fio: "Sasha", post: "Leader", text: "Hello" },
    { id: 1, date: 2, fio: "Max", post: "Developer", text: "Hello,Sasha" },
  ];

  const ContextBd = createContext(Bd);
}

export default MyContext;
