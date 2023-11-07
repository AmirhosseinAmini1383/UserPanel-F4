import React, { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainContext } from "./contexts/MainContext";

const App = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <MainContext.Provider value={{ ShowMenu, setShowMenu }}>
      <div>
        <Sidebar />
        <Content />
      </div>
    </MainContext.Provider>
  );
};

export default App;
