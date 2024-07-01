import React from "react";
import "./Home.css";
import { useGetCryptoByNameQuery } from "../../Services/Api";
import Coins from "../../Components/Coins";
import { useState,useEffect } from "react";
export default function Home() {
  const { data, error, isLoading } = useGetCryptoByNameQuery();
  const [val, setVal] = useState("");
  const [query, setQuery] = useState([]);
 

  useEffect(() => {
    if (data) {
      setQuery(data);
    }
  }, [data]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  function handleInput(e) {
    setVal(e.target.value);
  }
  function handler() {
    setQuery(data.filter((item) => item.id.startsWith(val)));
    console.log(query);
  }
  return (
    <div className="Home">
      <h1>
        Largest
        <br />
        Crypto Marketplace
      </h1>
      <div className="hero">
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={"Search crypto.."}
          onChange={handleInput}
          value={val}
        />
        <button onClick={handler}>Search</button>
      </form>
      <div className="crypto">
        <p>#</p>
        <div className="name">
          <p>Coins</p>
        </div>
        <p>Price</p>
        <p>24H Change</p>
        <p>Market Cap</p>
      </div>
      <div className="data">
        {query.map((crypto) => {
          return (
            <Coins
              key={crypto.id}
              Name={crypto.name}
              id={crypto.id}
              img={crypto.image}
              Sno={crypto.market_cap_rank}
              Price={crypto.current_price}
              Change={crypto.price_change_24h}
              MarketCap={crypto.market_cap}
            />
          );
        })}
      </div>
    </div>
  );
}
