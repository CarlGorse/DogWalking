import About from './About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingDetails from './BookingDetails';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import NewBookingPage from './NewBookingPage';
import UserSettings from './UserSettings';
import AdminGeneralSettings from './AdminGeneralSettings';
import AdminPlannedLocations from './AdminPlannedLocations';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/newBooking' element={<NewBookingPage />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/userSettings' element={<UserSettings />} />
          <Route exact path='/adminGeneralSettings' element={<AdminGeneralSettings />} />
          <Route exact path='/adminPlannedLocations' element={<AdminPlannedLocations />} />
          <Route exact path='/bookingDetails' element={<BookingDetails />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
