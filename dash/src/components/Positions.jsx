import { useState, useEffect } from "react";
import axios from 'axios';

const Positions = () => {
const [positions, setPositions] = useState([]);
useEffect(() => {
  const token = localStorage.getItem("token");

  axios.get("http://localhost:5000/api/allpositions", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then((res) => {
    setPositions(res.data);
  })
  .catch(err => {
    console.error(err);
  });
}, []);

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((pos, index) => {
              const currValue = pos.qty * pos.price;
              const pnl = currValue - pos.avg * pos.qty;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{pos.product}</td>
                  <td>{pos.name}</td> 
                  <td>{pos.qty}</td>
                  <td>{pos.avg.toFixed(2)}</td>
                  <td>{pos.price.toFixed(2)}</td>
                  <td className={profClass}>{pnl.toFixed(2)}</td>
                  <td className={pos.isLoss ? "loss" : "profit"}>
                    {pos.net}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
