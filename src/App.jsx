import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import PhoneDetails from "./components/PhoneDetails";

function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage/>} />
      <Route path="/phones/:phoneId" element={<PhoneDetails/>} />
    </Routes>
  );
}

export default App;
