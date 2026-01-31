import { useState, useEffect } from "react";
import axios from 'axios';
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {

 const [holdings, setHoldings] = useState([]);

   useEffect(() => {
  const token = localStorage.getItem("token");

  axios.get("http://localhost:5000/api/allholdings", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      setHoldings(res.data);
    })
    .catch((err) => console.error(err));
  }, []);

   const labels = holdings.map((subarr)=>subarr["name"]);
  
   const data = {
  labels,
  datasets: [
    {
      label: 'Stock Name',
      data: holdings.map((holding) => holding.price ),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};
 

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Avg. cost</th>
                <th>LTP</th>
                <th>Cur. val</th>
                <th>P&amp;L</th>
                <th>Net chg.</th>
                <th>Day chg.</th>
              </tr>
            </thead>

            <tbody>
              {holdings.map((stock, index) => {
                const currValue = stock.qty * stock.price;
                const pnl = currValue - stock.avg * stock.qty;
                const isProfit = pnl >= 0;
                const profClass = isProfit ? "profit" : "loss";
                const dayChange = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg}</td>
                    <td>{stock.price}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>{pnl.toFixed(2)}</td>
                    <td className={profClass}>
                      {((pnl / (stock.avg * stock.qty)) * 100).toFixed(2)}%
                    </td>
                    <td className={dayChange}>
                      {stock.dayChange}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>


      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data= {data}/>
    </>
  );
};

export default Holdings;
