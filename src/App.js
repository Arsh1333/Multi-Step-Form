import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
      <div></div>
    </BrowserRouter>
  );
}

export default App;
