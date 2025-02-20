import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../sesion/Login";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default AppRouter;