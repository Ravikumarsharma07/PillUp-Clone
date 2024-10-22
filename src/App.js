import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import "./components/header/header.css"
import HomePage from './components/homePage/HomePage';
import Header from './components/header/header';

function App() {
  return (
      <>
      {/* <Router>
        <Header />



            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>

      </Router>  */}
      <HomePage />



      

      </>
  );
}

export default App;
