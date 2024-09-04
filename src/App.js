import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <img src='./img.JPG' />
      </header>
      {/* CARD */}
      <main className='App-intro'>
        <div id='Intro'>
          <h2>Bartłomiej Sadza</h2>
          <h6>Student 🎓 | Aspiring Software Developer 👨🏻‍💻</h6>
          <p id="pq">github.com/bartlomiejsadza</p>
        </div>
        {/* BUTTONS */}
        <div className='buttons'>
          <button id="button">e-mail</button>
          <button id="buttonLinked">LinkedIn</button>
        </div>
        {/* ABOUT */}
        <div className='about'>
          <h3>About</h3>
          <p id='pp'>
          I'm an AGH student focused on IT and Econometrics, transitioning from Civil Engineering to full-stack development. With experience in Python, JavaScript, and React, I'm eager to take on a portfolio project that challenges me and highlights my skills as a growing developer.</p>
        </div>
        {/* INTERESTS */}
        <div className='about'>
          <h3>Interests</h3>
          <p id='pp'>Coding, literature, cars, parties, and exploring new technologies.</p>
        </div>
      </main>
      {/* FOOTER */}
      <footer className='App-footer'>
        <img id='icons' src='./tw.png' />
        <img id='icons' src='./fb.png' />
        <img id='icons' src='./ig.png' />
        <img id='icons' src='./gh.png' />
      </footer>
    </div>
  );
}
export default App;