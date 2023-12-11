import { useState } from "react";
import { MainContext } from "./Components/Context/MainContext";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Sidebar from "./Pages/Sidebar/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <MainContext.Provider value={{ showMenu, setShowMenu }}>
          <Home />
          <Sidebar />
        </MainContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
