import React, { useEffect, useState } from "react";
import OneTicket from "./Ticket/OneTicket";

function EmployeePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  return (
    <React.Fragment>
      <h2>Вкладка для сотрудника</h2>
      <button>Все задачи</button>
      <button>Активные</button>
      <button>Решенные</button>
      {items.map((item) => {
        return (
          <OneTicket
            key={item.id}
            date={item.date}
            fio={item.fio}
            post={item.post}
            text={item.text}
          />
        );
      })}
    </React.Fragment>
  );
}

export default EmployeePage;
