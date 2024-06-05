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
                    className="btn-close"
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
                        className="btn-close-save"
                        onClick={() => setModalOpenNewContact(false)}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn-close-save">
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
            <p>{phone.name}</p>
            <p>{phone.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
