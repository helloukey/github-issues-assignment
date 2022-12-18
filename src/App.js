import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Issue from "./pages/Issue";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/issues/:number" element={ <Issue /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
