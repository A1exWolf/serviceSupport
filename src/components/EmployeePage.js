import React, { useEffect, useState } from "react";
import OneTicket from "./Ticket/OneTicket";
import "./EmployeePage.css";
function EmployeePage() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all"); // "all" - все задачи, "active" - активные, "resolved" - решенные

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

  const deleteHandle = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleFilter = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  // Фильтрация задач в соответствии с выбранным фильтром
  const filteredItems = items.filter((item) => {
    if (filter === "resolved") {
      return item.active;
    } else if (filter === "active") {
      return !item.active;
    }
    return true;
  });

  // Функция для подсчета количества задач
  const countTasks = (filterType) => {
    if (filterType === "resolved") {
      return items.filter((item) => item.active).length;
    } else if (filterType === "active") {
      return items.filter((item) => !item.active).length;
    } else {
      return items.length;
    }
  };

  // Если нет задач "Список пуст"
  const isEmptyList = filteredItems.length === 0;

  return (
    <React.Fragment>
      <h2 className={"name-tab"}>Вкладка для сотрудника</h2>
      <div className={"btn-category"}>
        <button onClick={() => handleFilter("all")}>
          Все задачи ({countTasks("all")})
        </button>
        <button onClick={() => handleFilter("active")}>
          Активные ({countTasks("active")})
        </button>
        <button onClick={() => handleFilter("resolved")}>
          Решенные ({countTasks("resolved")})
        </button>
      </div>
      {isEmptyList ? (
        <p className={"null_task"}>Список пуст</p>
      ) : (
        filteredItems.map((item) => {
          return (
            <div className={"di"} key={item.id}>
              <p>Время/Дата: {item.date}</p>
              <p>От кого: {item.fio}</p>
              <p>Должность: {item.post}</p>
              <p>Текст: {item.text}</p>
              {item.active ? (
                <p>Статус: Решенная задача</p>
              ) : (
                <>
                  <p>Статус: активная задача</p>
                  <button
                    onClick={() => activeHandle(item.id)}
                    className={"btn"}
                  >
                    Решено
                  </button>
                </>
              )}
              <button
                onClick={() => deleteHandle(item.id)}
                className={"btn del_btn"}
              >
                Удалить задачу
              </button>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
}

export default EmployeePage;
