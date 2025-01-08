// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from 'components/Navbar';
import DailyTable from 'components/DailyTable';
import About from 'app/About';
import Portfolio from 'app/Portfolio';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="pb-24">
          <Routes>
            <Route path="/" element={<DailyTable />} /> {/* Default route with DailyTable */}
            <Route path="/about" element={<About />} />  {/* About page route */}
            <Route path="/portfolio" element={<Portfolio />} />  {/* Portfolio page route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
