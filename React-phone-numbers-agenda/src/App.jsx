import { phones } from "./Phones";
import React, { useState } from "react";
import "./styles.css";

function App() {
  const [phonesList, setPhonesList] = useState(phones);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [modalOpenNewContact, setModalOpenNewContact] = useState(false);
  const phoneDigits = /^\d{9}$/;

  const handleSave = (e) => {
    e.preventDefault();
    if (newName.trim() === "" || newNumber.trim() === "") {
      alert("Please enter name and number.");
      return;
    }
    if (!phoneDigits.test(newNumber)) {
      alert("Please enter a valid 9-digit phone number.");
      return;
    }

    const lastPhoneId =
      phonesList.length > 0 ? phonesList[phonesList.length - 1].id : 0;

    const newPhone = {
      id: lastPhoneId + 1,
      name: newName,
      number: newNumber,
    };
    setPhonesList([...phonesList, newPhone]);
    setNewName("");
    setNewNumber("");
    setModalOpenNewContact(false);
  };

  return (
    <div className="container">
      <div className="phonesContainer">
        <button
          className="addNewPhone"
          title="add new contact"
          onClick={() => setModalOpenNewContact(true)}
        >
          +
        </button>

        <div
          className={`modal-background ${modalOpenNewContact ? "show" : ""}`}
        >
          <div
            className={`modal ${modalOpenNewContact ? "show" : ""}`}
            tabIndex="-1"
            style={{ display: modalOpenNewContact ? "block" : "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div>
                  <button
                    type="button"
                    className="btn-x"
                    onClick={() => setModalOpenNewContact(false)}
                    aria-label="Close"
                  >
                    X
                  </button>
                  <h5 className="modal-title">New Contact </h5>
                </div>
                <div>
                  <form onSubmit={handleSave}>
                    <input
                      type="text"
                      name="namscdade"
                      value={newName}
                      placeholder="name"
                      onChange={(e) => setNewName(e.target.value)}
                    ></input>
                    <input
                      type="text"
                      name="number"
                      value={newNumber}
                      placeholder="number"
                      onChange={(e) => setNewNumber(e.target.value)}
                    ></input>
                    <div>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setModalOpenNewContact(false)}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn-save">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Contacts</h2>
        {phonesList.map((phone) => (
          <div className="phonesData" key={phone.id}>
            <div className="contact-info">
              <p>{phone.name}</p>
              <p>{phone.number}</p>
            </div>
            <div className="icons">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
