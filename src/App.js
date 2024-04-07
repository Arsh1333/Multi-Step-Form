import { BrowserRouter, Route, Routes } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />}></Route>
        <Route path="/fifth" element={<Fifth />}></Route>
        <Route path="/sixth" element={<Sixth />}></Route>
      </Routes>
      <div></div>
    </BrowserRouter>
  );
}

export default App;
