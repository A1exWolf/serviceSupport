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

  const activeHandle = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          active: true,
        };
      }
      return item;
    });

    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  // Если нет задач "Надпись нету тикетов."

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
          <div className={"di"}>
            <p>Время/Дата: {item.date}</p>
            <p>От кого: {item.fio}</p>
            <p>Должность: {item.post}</p>
            <p>Текст: {item.text}</p>
            {item.active ? (
              <p>Статус: Решено</p>
            ) : (
              <button onClick={() => activeHandle(item.id)} className={"btn"}>
                Решено
              </button>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default EmployeePage;
