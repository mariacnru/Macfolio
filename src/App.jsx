import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/modals/ContactMe";
import CMD_TechStack from "./components/modals/CMD_TechStack";

function App() {
  const [contactMe, setContactMe] = useState(false);
  const [techStack, setTechStack] = useState(false);
  const topZ = useRef(10);

  return (
    <main>
      <Navbar />

      <Welcome />

      <Footer setContactMe={setContactMe} setTechStack={setTechStack} />

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
    </main>
  );
}

export default App;
