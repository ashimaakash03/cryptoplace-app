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
    </div>
  );
};

export default Home;
