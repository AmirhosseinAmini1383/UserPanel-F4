import { useState } from "react";
import Context from "./Content";
import Sidebar from "./Sidebar";
import { MainContext } from "./Context/MainContext";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <MainContext.Provider value={{ showMenu, setShowMenu }}>
        <Context />
        <Sidebar />
      </MainContext.Provider>
    </div>
  );
}

export default App;
