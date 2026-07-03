import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/modals/ContactMe";
import CMD_TechStack from "./components/modals/CMD_TechStack";
import Work from "./components/modals/Work/Work";
import Blog from "./components/modals/Blog/Blog";

function App() {
  const [contactMe, setContactMe] = useState(false);
  const [techStack, setTechStack] = useState(false);
  const [works, setWorks] = useState(false);
  const [blog, setBlog] = useState(false);
  const topZ = useRef(10);

  return (
    <main>
      <Navbar setContactMe={setContactMe} setWorks={setWorks} />

      <Welcome />

      <Footer
        setContactMe={setContactMe}
        setTechStack={setTechStack}
        setWorks={setWorks}
        setBlog={setBlog}
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

      <Blog blog={blog} setBlog={setBlog} topZ={topZ} />
    </main>
  );
}

export default App;
