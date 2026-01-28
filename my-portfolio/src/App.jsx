import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import About from './pages/About';
// IMPORT THE MISSING COMPONENT HERE
// Make sure the path matches your actual file location!
import ProjectsList from "./components/Projects"; 

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* This matches the /projects link in your Nav */}
          <Route path="/projects" element={<ProjectsList />} />
          
          {/* This is for the individual deep-dives */}
          <Route path="/project/:id" element={<ProjectPage />} />
          
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;