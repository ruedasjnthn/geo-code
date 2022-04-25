import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Code from './pages/consent/code'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={ <h1>HomePage</h1> } />
        <Route path="consent/abc123abc123" element={ <Code /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
