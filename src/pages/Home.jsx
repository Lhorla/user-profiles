import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <main className="header-home">
        <h1>Welcome to my user profiles!</h1>
        <p>Have fun viewing.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
