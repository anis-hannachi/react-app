import React, { useState } from "react";
import axios from "axios";

function SaveClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  async function registerClient(event) {
    event.preventDefault();

    // const response = await fetch("http://localhost:1337/api/saveclient", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstName,
    //     lastName,
    //     email,
    //     note,
    //   }),
    // });

    // const data = await response.json();
    // console.log(data);
    axios.post("http://localhost:1337/api/saveclient", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      note: note,
    });
  }

  return (
    <div>
      <h1>Ajouter un client</h1>
      <form className="form" onSubmit={registerClient}>
        <input
          style={{ marginBottom: 10 }}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Prénom"
        />
        <br />
        <input
          style={{ marginBottom: 10 }}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Nom"
        />
        <br />
        <input
          style={{ marginBottom: 10 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <br />
        <input
          style={{ marginBottom: 10 }}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          type="text"
          placeholder="Note"
        />
        <br />
        <input type="submit" value="Valider" />
      </form>
    </div>
  );
}

export default SaveClient;