import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import BookingsPage from './BookingsPage';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import Settings from './Settings';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/bookings' element={<BookingsPage />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/settings' element={<Settings />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
