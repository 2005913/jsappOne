import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./foutes/Home";
import Detail from "./foutes/Detail";
import DndConOne from "./foutes/DndConOne";
import DndConTwo from "./foutes/DndConTwo";


function App() {

  return (
  <Routes>
    <Route path="/movie/:id" element={<Detail/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hello1" element={<DndConOne/>}></Route>
    <Route path="/hello2" element={<DndConTwo/>}></Route>
  </Routes>)
}

export default App;
