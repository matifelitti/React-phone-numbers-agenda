import { phones } from "./Phones";
import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="phonesContainer">
          <h2>Contacts</h2>
          {phones.map((phone) => (
            <div className="phonesData" key={phone.id}>
              <p>{phone.name}</p>
              <p>{phone.number}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
