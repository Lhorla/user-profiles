import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="header-home">
        <h1>Welcome to my user profiles!</h1>
        <p>Have fun viewing.</p>
      </main>
    </div>
  );
}

export default Home;
