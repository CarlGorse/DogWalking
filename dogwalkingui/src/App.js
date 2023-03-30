import About from './features/Menu/About';
import AdminGeneralSettings from './features/Settings/AdminGeneralSettings';
import AdminPlannedLocationsList from './features/Settings/AdminPlannedLocations/AdminPlannedLocationsList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './features/Menu/Contact';
import Home from './features/Home';
import NavBar from './features/NavBar/NavBar';
import AdhocBookingPage from './features/Booking/AdhocBooking/Page';
import UserSettings from './features/Settings/UserSettings';

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/adhocBookingPage' element={<AdhocBookingPage />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/userSettings' element={<UserSettings />} />
        <Route exact path='/adminGeneralSettings' element={<AdminGeneralSettings />} />
        <Route exact path='/adminPlannedLocations' element={<AdminPlannedLocationsList />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
