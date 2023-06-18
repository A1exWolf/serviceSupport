import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import "./SupportPage.css";

function SupportPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const existingItems = JSON.parse(localStorage.getItem("items")) || [];
    const updatedItems = [...items, ...existingItems];
    localStorage.setItem("items", JSON.stringify(updatedItems));
  }, [items]);

  const [fio, setFio] = useState("");
  const [postUser, setPostUser] = useState("");
  const [textError, setTextError] = useState("");
  const [isFioEmpty, setIsFioEmpty] = useState(false);
  const [isPostUserEmpty, setIsPostUserEmpty] = useState(false);
  const [isTextErrorEmpty, setIsTextErrorEmpty] = useState(false);

  const fioChange = (e) => {
    setFio(e.target.value);
    setIsFioEmpty(false);
  };

  const postUserChange = (e) => {
    setPostUser(e.target.value);
    setIsPostUserEmpty(false);
  };

  const textErrorChange = (e) => {
    setTextError(e.target.value);
    setIsTextErrorEmpty(false);
  };

  const SendTicketHandle = (e) => {
    // e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = moment().format("HH:mm DD-MM-YYYY");

    if (!fio) {
      setIsFioEmpty(true);
      return;
    }

    if (!postUser) {
      setIsPostUserEmpty(true);
      return;
    }

    if (!textError) {
      setIsTextErrorEmpty(true);
      return;
    }

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
            value={fio}
            onChange={fioChange}
            type="text"
            id="fio"
            name="fio"
            placeholder={"Иванов Иван Иваныч"}
            className={"formUser"}
          />
          {isFioEmpty && (
            <p className={"error"}>*Пожалуйста, заполните поле ФИО.</p>
          )}
          <br />
          <label>Должность:</label>
          <br />
          <input
            value={postUser}
            onChange={postUserChange}
            list="postUser"
            name="postUser"
            placeholder={"Выберите из списка"}
            className={"formUser"}
          />
          {isPostUserEmpty && (
            <p className={"error"}>*Пожалуйста, выберите должность.</p>
          )}
          <datalist id="postUser">
            <option value="Рядовой пользователь" />
            <option value="Сотрудник/Тестер" />
          </datalist>
          <br />
          <label>Опишите ошибку/вопрос:</label>
          <br />
          <textarea
            value={textError}
            onChange={textErrorChange}
            name="message"
            rows="10"
            cols="30"
            placeholder={"Опишите ошибку/вопрос"}
            className={"formUser"}
          ></textarea>
          {isTextErrorEmpty && (
            <p className={"error"}>
              *Пожалуйста, заполните поле описания ошибки/вопроса.
            </p>
          )}
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
