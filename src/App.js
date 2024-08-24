import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Sidemenu";
import Expenseapply from "./Components/Expense/Expenseapply";
import  Viewdetail from "./Components/Expense/Viewdetail"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="menu/view-expense" element={<Viewdetail/>} />
          {/* <Route path="/expense-apply" element={<Expenseapply />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
