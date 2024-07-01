import React from "react";
import "./Coins.css";
import {Link} from "react-router-dom"
export default function Coins({ id,Sno, Name, Price, Change, MarketCap, img }) {
  const change = Number(Change).toFixed(2);
  return (
    <Link to={`./coin/${id}`}>
      <div
        className="coinDetails"
        onClick={() => {
          console.log("clicked");
        }}
      >
        <p>{Sno}</p>

        <div className="name">
          <img src={img} alt="error" />
          <p>{Name}</p>
        </div>
        <p>{Number(Price).toLocaleString()}</p>
        <p className={change > -0.0000000000000001 ? "positive" : "negative"}>
          {change}
        </p>
        <p>{Number(MarketCap).toLocaleString()}</p>
      </div>
    </Link>
  );
}
