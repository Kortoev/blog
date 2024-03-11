import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Entrance from "./page/Entrance/Entrance";
import { Regisrt } from "./page/Registr/Registr";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Entrance />} />
          <Route path="/registr" element={<Regisrt />} />
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
