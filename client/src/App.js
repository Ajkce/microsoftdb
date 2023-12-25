import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("http://localhost:5000/api/v1");
        let result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      <table>
        <thead>
          <th>productId</th>
          <th>ProductName</th>
          <th>Quantity</th>
        </thead>
        {data &&
          data.map((item) => {
            return (
              <tbody>
                <td>{item.ProductID}</td>
                <td>{item.ProductName}</td>
                <td>{item.Quantity}</td>
              </tbody>
            );
          })}
      </table>
      ;
    </div>
  );
};

export default App;
