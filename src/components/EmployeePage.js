import React, { useEffect, useState } from "react";
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

  const toggleStatus = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          active: !item.active,
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
      <div className="employee-container">
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
      </div>
      {isEmptyList ? (
        <p className={"null_task"}>Список пуст...</p>
      ) : (
        filteredItems.map((item) => {
          return (
            <div className={"task"} key={item.id}>
              <p>Время/Дата: {item.date}</p>
              <p>От кого: {item.fio}</p>
              <p>Должность: {item.post}</p>
              <p>Текст: {item.text}</p>
              <p className={"status"}>
                Статус: {item.active ? "Решенная задача" : "Активная задача"}
              </p>
              <div className={"action-buttons"}>
                {item.active ? (
                  <button onClick={() => toggleStatus(item.id)}>
                    Отменить решение
                  </button>
                ) : (
                  <button onClick={() => toggleStatus(item.id)}>Решено</button>
                )}
                <button
                  className={"cancel-button"}
                  onClick={() => deleteHandle(item.id)}
                >
                  Удалить задачу
                </button>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
}

export default EmployeePage;
