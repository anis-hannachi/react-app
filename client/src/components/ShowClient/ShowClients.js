import React, { useEffect, useState } from "react";
import axios from "axios";
import AverageCalculation from "../AverageCalculation/AverageCalculation";
import "./ShowClient.css"

function ShowClients() {
  const [clientList, setClientList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:1337/api/client").then((response) => {
      setClientList(response.data);
    });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search ..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <h1>Clients</h1>
      <div>
        {clientList
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="client" key={key}>
                <p>
                  {val.firstName} {val.lastName}
                </p>
                <p>{val.email}</p>
                <p>{val.note}</p>
              </div>
            );
          })}
      </div>
      <div>
        <AverageCalculation />
      </div>
    </div>
  );
}

export default ShowClients;
