import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Sidemenu"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Menu" element={<Menu />} />
          {/* <Route path="/Menu" element={< />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;