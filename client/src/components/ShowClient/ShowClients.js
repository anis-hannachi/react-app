import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchClient from "../SearchClient/SearchClient";

function ShowClients() {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/client", (response) => {
      setClientList(response.data);
    });
  }, []);

  return (
    <div>
      <SearchClient />
      <h1>Clients</h1>
      <div>
        {clientList.map((val, key) => {
          return (
            <div key={key}>
              <p>
                {val.firstName} {val.lastName}
              </p>
              <p>{val.email}</p>
              <p>{val.note}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowClients;
