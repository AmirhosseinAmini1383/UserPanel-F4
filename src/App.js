import { useState } from "react";
import Context from "./Content";
import Sidebar from "./Sidebar";
import { MainContext } from "./Context/MainContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <Context />
          <Sidebar />
        </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
