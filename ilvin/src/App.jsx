import "./App.css";
import MainLayouts from "./layout/MainLayouts";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Data from "./pages/Data";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts/>}>
          <Route path="/" element={<Data />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="*" element={<NoPage />} /> 
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
