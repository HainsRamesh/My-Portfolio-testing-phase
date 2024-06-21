import Navigation from "./Components/Navigation";
import Banner from "./Components/Banner";
import Experience from "./Components/Experience";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <span class="loader">
            <span class="loader-inner"></span>
          </span>
        </div>
      ) : (
        <main>
          <Navigation />
          <Banner />
          <Experience />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>

    // <main>
    //   <Navigation />
    //   <Banner />
    //   <Experience />
    //   <About />
    //   <Skills />
    //   <Resume />
    //   <Projects />
    //   <Contact />
    //   <Footer />
    // </main>
  );
}

export default App;
