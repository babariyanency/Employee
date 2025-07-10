import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import './App.css';
import Navbar from "./Component/Navbar.js";
import Insert from "./Pages/Insert.js";
import '@fortawesome/fontawesome-free/css/all.min.css';
import List from "./Pages/List.js";
import Update from "./Pages/Update.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Insert/>}></Route>
        <Route path="/data" element={<List />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
