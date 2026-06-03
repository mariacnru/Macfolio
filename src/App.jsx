import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/modals/ContactMe";
import CMD_TechStack from "./components/modals/CMD_TechStack";
import Work from "./components/modals/Work/Work";

function App() {
  const [contactMe, setContactMe] = useState(false);
  const [techStack, setTechStack] = useState(false);
  const [works, setWorks] = useState(false);
  const topZ = useRef(10);

  return (
    <main>
      <Navbar />

      <Welcome />

      <Footer
        setContactMe={setContactMe}
        setTechStack={setTechStack}
        setWorks={setWorks}
      />

      <ContactMe
        contactMe={contactMe}
        setContactMe={setContactMe}
        topZ={topZ}
      />

      <CMD_TechStack
        techStack={techStack}
        setTechStack={setTechStack}
        topZ={topZ}
      />

      <Work works={works} setWorks={setWorks} topZ={topZ} />
    </main>
  );
}

export default App;
