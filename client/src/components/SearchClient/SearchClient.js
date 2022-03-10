import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchClient() {
  const [clientList, setClientList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    axios.get("http://localhost:1337/api/client", (response) => {
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
        .map((value, key) => {
          return (
            <div key={key}>
              <p>{value.firstName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default SearchClient;
