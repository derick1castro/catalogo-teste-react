import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TotalList from "./components/pages/TotalList";
import Login from "./components/auth/Login";
import CarDetails from "./components/pages/CarDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lista-carros" element={<TotalList />} />
          <Route path="/carros/:id" element={<CarDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
