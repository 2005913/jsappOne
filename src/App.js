import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./foutes/Home";
import Detail from "./foutes/Detail";
import DndConOne from "./foutes/DndConOne";


function App() {

  return (
  <Routes>
    <Route path="/movie/:id" element={<Detail/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hello1" element={<DndConOne/>}></Route>
  </Routes>)
}

export default App;
