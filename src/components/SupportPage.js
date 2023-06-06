import React, { useEffect, useState } from "react";

function SupportPage() {
  const [items, setItems] = useState([
    { id: 0, date: 5, fio: "Sasha", post: "Leadesdasdsar", text: "Hello" },
    { id: 1, date: 2, fio: "Max", post: "Developer", text: "Hello,Sasha" },
  ]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const SendTicketHandle = (e) => {
    // e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTicket = [
      {
        id: 441,
        date: 123123123,
        fio: "ASDA",
        post: "sadsadasdasd",
        text: "xzcwse213dasdsawdasdsadszxd3w2dsasad",
      },
    ];

    // const newItems = items.unshift(newTicket);
    // console.log(items);
    setItems((prevState) => [...newTicket, ...prevState]);
  };

  return (
    <React.Fragment>
      <h2>Написать тикет</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Новый тикет:</legend>
          <label htmlFor="fio">ФИО:</label>
          <br />
          <input
            type="text"
            id="fio"
            name="fio"
            placeholder={"Иванов Иван Иваныч"}
          />
          <br />
          <label>Должность:</label>
          <br />
          <input
            list="postUser"
            name="postUser"
            placeholder={"Выберите из списка"}
          />
          <datalist id="postUser">
            <option value="Рядовой пользователь" />
            <option value="Сотрудник/Тестер" />
          </datalist>
          <br />
          <label>Опишите ошибку/вопрос:</label>
          <br />
          <textarea
            name="message"
            rows="10"
            cols="30"
            placeholder={"Опишите ошибку/вопрос"}
          ></textarea>
          <br />
          <button type={"submit"} onClick={SendTicketHandle}>
            Отправить
          </button>
        </fieldset>
      </form>
    </React.Fragment>
  );
}

export default SupportPage;
