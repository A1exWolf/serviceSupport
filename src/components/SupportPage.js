import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import "./SupportPage.css";

function SupportPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = [...existingItems, ...items];
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }, [items]);

  const [fio, setFio] = useState("");
  const fioChange = (e) => {
    setFio(e.target.value);
  };

  const [postUser, setPostUser] = useState("");
  const postUserChange = (e) => {
    setPostUser(e.target.value);
  };

  const [textError, setTextError] = useState("");
  const textErrorChange = (e) => {
    setTextError(e.target.value);
  };

  const SendTicketHandle = (e) => {
    // e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = moment().format("HH:mm DD-MM-YYYY");

    let newTicket = [
      {
        id: Date.now(),
        date: date,
        fio: fio,
        post: postUser,
        text: textError,
        active: false,
      },
    ];

    setItems((prevState) => [...newTicket, ...prevState]);

    setFio("");
    setPostUser("");
    setTextError("");
  };

  return (
    <React.Fragment>
      <h2 className={"name-tab"}>Написать тикет</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Новый тикет:</legend>
          <label htmlFor="fio">ФИО:</label>
          <br />
          <input
            // ref={fioRef}
            value={fio}
            onChange={fioChange}
            type="text"
            id="fio"
            name="fio"
            placeholder={"Иванов Иван Иваныч"}
            className={"formUser"}
          />
          <br />
          <label>Должность:</label>
          <br />
          <input
            // ref={postUserRef}
            value={postUser}
            onChange={postUserChange}
            list="postUser"
            name="postUser"
            placeholder={"Выберите из списка"}
            className={"formUser"}
          />
          <datalist id="postUser">
            <option value="Рядовой пользователь" />
            <option value="Сотрудник/Тестер" />
          </datalist>
          <br />
          <label>Опишите ошибку/вопрос:</label>
          <br />
          <textarea
            // ref={textErrorRef}
            value={textError}
            onChange={textErrorChange}
            name="message"
            rows="10"
            cols="30"
            placeholder={"Опишите ошибку/вопрос"}
            className={"formUser"}
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
