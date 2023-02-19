import About from './Menu/About';
import AdminGeneralSettings from './Settings/AdminGeneralSettings';
import AdminPlannedLocations from './Settings/AdminPlannedLocations';
import BookingConfirmationDetails from './Booking/BookingConfirmationDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Menu/Contact';
import Home from './Home';
import NavBar from './NavBar';
import NewBookingPage from './Booking/NewBookingPage';
import UserSettings from './Settings/UserSettings';

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
          <Route exact path='/bookingConfirmationDetails' element={<BookingConfirmationDetails />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
