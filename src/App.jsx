import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  About,
  Hero,
  Tech,
  Experiences,
  Works,
  Contact,
  Alert,
} from './components';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  const closeAlert = () => {
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading && (
        <Alert
          handleClick={closeAlert}
          text="The live project demos are hosted on free cloud platforms, so they might load slowly."
          type="Note"
        />
      )}

      <div className="relative z-0 bg-primary">
        <div className="bg-contact-bg bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        {/* <Experiences/> */}

        <div className="relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
