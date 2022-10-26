import React from "react"
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <main className="header-about">
        <h1>Here's what you should know</h1>
        <p>
          Life is full of surprises. You never know what's going to happen next.
        </p>
      </main>
    </div>
  );
}

export default About;