import React from 'react';
import './App.css';
import './Banner.css';
import './Newsletter.css';
import bannerImage from './images/banner.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="banner">
          <img src={bannerImage} alt="Banner" />
          <h1>Welcome to 4AM</h1>
          <p>We're not early birds or night owls. We're some form of permanently exhausted pigeons.</p>
        </div>
      </header>
      <footer>
        <div className="newsletter">
          <h2>Join our newsletter</h2>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
