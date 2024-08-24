import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Menu from "./Components/Menu/Sidemenu";
import Expenseapply from "./Components/Expense/Expenseapply";
import ApprovedClaim from "./Components/Expense/ApprovedClaim";
import ApprovedReview from "./Components/Expense/ApprovedReview"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/expenseapply" element={<Expenseapply />} />
          <Route path="/approved-claim" element={<ApprovedClaim />} />
          <Route path="/approved-review" element={<ApprovedReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
