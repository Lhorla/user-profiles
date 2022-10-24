import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/features">Features</Link>
        <Link to="/users">Users</Link>
      </nav>
      <main>
        <h2>Welcome to my user profiles!</h2>
        <p>Have fun viewing.</p>
      </main>
    </div>
  );
}

export default Home;
