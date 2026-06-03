import React, { useState } from "react";
import Home from "./components/Home";

function Works() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>{activeTab === "home" && <Home setActiveTab={setActiveTab} />}</div>
  );
}

export default Works;
