import React from "react";
import "./Coin.css";
import { useGetCryptoByNameQuery } from "../../Services/Api";
import { useParams } from "react-router-dom";

export default function Coin() {
  const { id } = useParams();

  const { data, error, isLoading } = useGetCryptoByNameQuery()
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  const item = data.find((crypto) =>  crypto.id == id );
  console.log(item)
  return (
    <div className="Coin">
      <img src={item.image} alt="error" className="Crypto-img" />
      <h1>
        {item.name} ({item.symbol.toUpperCase()})
      </h1>
      <img
        src="https://imgs.search.brave.com/vidLMH3AHxf-0Y2vkfETrh2WEiPXs7kvR--UQfQ7VS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jaGFu/Z2VsbHkuY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDUvQlRDX0Fs/bF9ncmFwaF9jb2lu/bWFya2V0Y2FwLnBu/Zw"
        alt="error"
        className="chart"
      />
      <div className="details">
        <ul>
          <li className="flex">
            <p>Crypto Market Rank</p> <p>{item.market_cap_rank}</p>
          </li>
          <li className="flex">
            <p>Current Price</p>{" "}
            <p>{Number(item.current_price).toLocaleString()}</p>
          </li>
          <li className="flex">
            <p>Market Cap</p> <p>{Number(item.market_cap).toLocaleString()}</p>
          </li>
          <li className="flex">
            <p>24 Hour high</p> <p>{Number(item.high_24h).toLocaleString()}</p>
          </li>
          <li className="flex">
            <p>24 Hour low</p> <p>{Number(item.low_24h).toLocaleString()}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
