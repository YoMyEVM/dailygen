// App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import DailyTable from 'components/DailyTable';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <main className="pb-24">
          <DailyTable /> {/* Add DailyTable here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
