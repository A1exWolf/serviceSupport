import React from "react";
import "./Ticket.css";

function oneTicket(props) {
  return (
    <div className={"di"}>
      <p>Время/Дата: {props.date}</p>
      <p>От кого: {props.fio}</p>
      <p>Должность: {props.post}</p>
      <p>Текст: {props.text}</p>
      <button onClick={activeHandle} className={"btn"}>
        Решено
      </button>
    </div>
  );
}

export default oneTicket;
