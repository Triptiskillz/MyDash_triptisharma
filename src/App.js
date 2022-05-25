import { Route, Routes } from "react-router-dom";
import Chart from "./pages/Chart.js";
import Home from "./pages/Home.js";
import "./App.scss";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
        </Routes>
    );
}

export default App;
