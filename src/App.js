import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ExpenseReview from "./ExpenseReview";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="expense-review" element={<ExpenseReview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;