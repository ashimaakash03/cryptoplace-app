//import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the largest cryptocurrency marketplace. Sign up to explore
          more about cryptocurrency.
        </p>
        <form>
          <input type="text" placeholder="Search Cryptoplace..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
