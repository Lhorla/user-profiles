import React from "react"
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <nav className="app">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      <main>
        <h2>Here's what you should know</h2>
        <p>
          Life is full of surprises. You never know what's going to happen next.
        </p>
      </main>
    </div>
  );
}

export default About;