import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar'; // Import your Navbar component
import Footer from 'components/Footer';

function App() {
  return (
    <Router>  {/* Wrap the app with Router */}
      <Navbar />  {/* Use Navbar inside Router */}
      <main className="pb-24">
        {/* Your other components go here */}
      </main>\
      <Footer />
    </Router>
  );
}

export default App;
