import React from "react"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <main className="header-about">
        <h1>
          Life is full of surprises.  <br />
          You never know what's going to happen next.
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default About;