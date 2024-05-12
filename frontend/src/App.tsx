import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import CandidateList from './components/Interview/CandidateList';
import InterviewForm from './components/Interview/InterviewForm';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">
                <button>Signup</button>
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <button>Signin</button>
              </Link>
            </li>
            <li>
              <Link to="/interviews">
                <button>Candidate List</button>
              </Link>
            </li>
            <li>
              <Link to="/interviews/add">
                <button>Add Interview</button>
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/interviews" element={<CandidateList />} />
          <Route path="/interviews/add" element={<InterviewForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
