import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./foutes/Home";
import Detail from "./foutes/Detail";
import DndCon from "./foutes/DndCon";


function App() {

  return (
  <Routes>
    <Route path="/movie/:id" element={<Detail/>}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/hello" element={<DndCon/>}></Route>
  </Routes>)
}

export default App;
