import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to the Hillel Coders' Magic Academy!</h1>
        <p>Unleash the magic of React and become a Hilleler magician.</p>
      </header>
      <div className="sidebar">
        <h2>Fun Facts about Hillel Magic</h2>
        <ul>
          <li>
            Did you know that the Hilleler magicians can make bugs disappear
            with a wave of their wands?
          </li>
          <li>
            Hillelers are known for their ability to conjure complex algorithms
            out of thin air.
          </li>
          <li>
            The secret to Hilleler magic lies in their enchanting code spells.
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>Enroll in the Hillel Coders' Magic Academy</h2>
        <p>
          Join our school and learn the magical art of React programming. Here
          are some courses we offer:
        </p>
        <ol>
          <li>
            Introduction to React Wizardry: Master the basics of React and
            harness its power.
          </li>
          <li>
            Hillel Charms and Spells: Unlock the secrets of advanced React
            techniques.
          </li>
          <li>
            Hilleler Potions: Dive deep into state management and component
            lifecycles.
          </li>
          <li>
            Mastering the React Magic Wand: Create captivating user interfaces
            with React and CSS sorcery.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
