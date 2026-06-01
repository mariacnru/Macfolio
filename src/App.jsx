import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ContactMe from "./components/modals/ContactMe";

function App() {
  const [contactMe, setContactMe] = useState(false);
  return (
    <main>
      <Navbar />
      <Welcome />
      <Footer setContactMe={setContactMe} />
      <ContactMe contactMe={contactMe} setContactMe={setContactMe} />
    </main>
  );
}

export default App;
