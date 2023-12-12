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
    }, 4000);
  }, []);
  const closeAlert = () => {
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading && (
        <Alert
          handleClick={closeAlert}
          // text="The live projects demo are deployed to heroku, they may load slowly."
          text="There is a problem with live projects demo, You can vist github for more details."
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
