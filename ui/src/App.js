import { baseUrl as apiBaseUrl, get as apiGet, post as apiPost } from 'functions/api.js';
import About from 'features/Menu/About';
import AdminGeneralSettings from 'features/Settings/AdminGeneralSettings';
import AdminPlannedLocations from 'features/Settings/AdminPlannedLocations';
import Book from 'features/Bookings/Book';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from 'features/Menu/Contact';
import Home from 'features/Home';
import InputBookingDetails from 'features/Bookings/InputBookingDetails';
import NavBar from 'features/NavBar';
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useEffect, useState } from 'react';
import UserSettings from 'features/Settings/UserSettings';

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
    console.log(status);
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
          <Route exact path='/about' element={<About />} />
          <Route exact path='/book' element={<Book />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/userSettings' element={<UserSettings />} />
          <Route exact path='/adminGeneralSettings' element={<AdminGeneralSettings />} />
          <Route exact path='/adminPlannedLocations' element={<AdminPlannedLocations />} />
          <Route exact path='/inputBookingDetails' element={<InputBookingDetails />} />
        </Routes>

      </BrowserRouter>
    </SystemSettingsContext.Provider>
  );
}

export default App;
