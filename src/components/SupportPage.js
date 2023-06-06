import React, { useEffect, useRef, useState } from "react";
import moment from "moment";

function SupportPage() {
  const [items, setItems] = useState([
    { id: 0, date: 5, fio: "Sasha", post: "Leadesdasdsar", text: "Hello" },
    { id: 1, date: 2, fio: "Max", post: "Developer", text: "Hello,Sasha" },
  ]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const fioRef = useRef(null);
  const postUserRef = useRef(null);
  const textErrorRef = useRef(null);

  const SendTicketHandle = (e) => {
    // e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const date = moment().format("LLL");
    const date = moment().format("HH:mm DD-MM-YYYY");

    let newTicket = [
      {
        id: Date.now(),
        date: date,
        fio: fioRef.current.value,
        post: postUserRef.current.value,
        text: textErrorRef.current.value,
      },
    ];

    // const objectDate = new Date();
    // console.log(objectDate);
    // const day = objectDate.getDate();
    // const month = objectDate.getMonth();
    // const year = objectDate.getFullYear();
    // console.log(`${day}/${month + 1}/${year}`);

    // console.log(fioRef.current.value);
    // console.log(postUserRef.current.value);
    // console.log(textErrorRef.current.value);

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
            ref={fioRef}
            type="text"
            id="fio"
            name="fio"
            placeholder={"Иванов Иван Иваныч"}
          />
          <br />
          <label>Должность:</label>
          <br />
          <input
            ref={postUserRef}
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
            ref={textErrorRef}
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
