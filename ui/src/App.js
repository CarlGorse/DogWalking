import { baseUrl as apiBaseUrl, get as apiGet, post as apiPost } from 'functions/api.js';
import AboutUs from 'features/Menu/AboutUs';
import AdminGeneralSettings from 'features/Settings/AdminGeneralSettings';
import AdminPlannedLocations from 'features/Settings/AdminPlannedLocations';
import Book from 'features/Bookings/Book';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from 'features/Menu/ContactUs';
import Home from 'features/Home';
import InputBookingDetails from 'features/Bookings/InputBookingDetails';
import NavBar from 'features/NavBar';
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useEffect, useState } from 'react';
import YourSettings from 'features/Settings/YourSettings';

function App() {

  const [getSystemSettings, setSystemSettings2] = useState(null);

  useEffect(() => {
    apiGet(
      {
        url: apiBaseUrl + "/systemSettings/get",
        callback: (response) => {
          setSystemSettings2(response.data);
        }
      }
    )
  }, []
  );

  function setSystemSettings(status) {
    apiPost(
      {
        url: apiBaseUrl + "/systemSettings/update",
        payload: status,
        callback: (response) => {
          setSystemSettings2(status);
        }
      }
    )
  }

  return (
    <SystemSettingsContext.Provider value={{ getSystemSettings, setSystemSettings }}>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/aboutUs' element={<AboutUs />} />
          <Route exact path='/book' element={<Book />} />
          <Route exact path='/contactUs' element={<ContactUs />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/yourSettings' element={<YourSettings />} />
          <Route exact path='/adminGeneralSettings' element={<AdminGeneralSettings />} />
          <Route exact path='/adminPlannedLocations' element={<AdminPlannedLocations />} />
          <Route exact path='/inputBookingDetails' element={<InputBookingDetails />} />
        </Routes>

      </BrowserRouter>
    </SystemSettingsContext.Provider>
  );
}

export default App;
