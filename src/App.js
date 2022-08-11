import './App.scss';
import React from 'react';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Navigation />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
