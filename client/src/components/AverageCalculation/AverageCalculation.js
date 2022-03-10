import React, { useEffect, useState } from "react";
import axios from "axios";

function AverageCalculation() {
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/client").then((response) => {
      setClientList(response.data);
    });
  }, []);

  function calculAverage() {
    const clientsNumber = clientList.length;
    const result = clientList.reduce(
      (total, client) => (total + client.note) / clientsNumber,
      0
    );
    return <div>{result}</div>;
  }

  return <div style={{ marginBottom: 10 }}>Moyenne = {calculAverage()}</div>;
}

export default AverageCalculation;
