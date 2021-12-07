import React from "react";
import MainNavbar from "./components/MainNavbar.js";
import FullName from "./components/FullName.js";
import Address from "./components/Address.js";
import ProfilePhoto from "./components/ProfilePhoto.js";

import "./App.css";

function App() {
  return (
    <div>
      <MainNavbar />
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
