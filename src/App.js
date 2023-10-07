import { Foryou } from "./pages/Foryou";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blogs } from "./pages/Blogs";
import { Startup } from "./pages/Startup";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/startup" element={<Startup/>} />
          <Route exact path="/you" element={<Foryou/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
