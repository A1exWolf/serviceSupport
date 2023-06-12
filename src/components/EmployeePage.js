import React, { useEffect, useState } from "react";
import OneTicket from "./Ticket/OneTicket";
import "./EmployeePage.css";
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
      <h2 className={"name-tab"}>Вкладка для сотрудника</h2>
      <div className={"btn-category"}>
        <button>Все задачи</button>
        <button>Активные</button>
        <button>Решенные</button>
      </div>
      {items.map((item) => {
        return (
          <OneTicket
            key={item.id}
            date={item.date}
            fio={item.fio}
            post={item.post}
            text={item.text}
            active={item.active}
          />
        );
      })}
    </React.Fragment>
  );
}

export default EmployeePage;
