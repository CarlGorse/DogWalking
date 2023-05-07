import axios from 'axios';
import About from 'features/Menu/About';
import AdminGeneralSettings from 'features/Settings/AdminGeneralSettings/AdminGeneralSettings';
import AdminPlannedLocations from 'features/Settings/AdminPlannedLocations/AdminPlannedLocations';
import Book from 'features/Bookings/Book';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from 'features/Menu/Contact';
import Home from 'features/Home';
import InputBookingDetails from 'features/Bookings/InputBookingDetails';
import NavBar from 'features/NavBar/NavBar';
import SystemSettingsContext from "contexts/systemSettingsContext";
import { useEffect, useRef, useState } from 'react';
import UserSettings from 'features/Settings/UserSettings';

function App() {

  const [getSystemSettings, setSystemSettings] = useState(null);
  const hasDoneInitialLoad = useRef(false);

  useEffect(() => {
    axios.get("https://localhost:7083/api/systemSettings/get")
      .then(response => {
        setSystemSettings(response.data);
      })
      .then(response => {
        hasDoneInitialLoad.current = true;
      })
  }, []
  );

  useEffect(() => {
    if (hasDoneInitialLoad.current === true) {
      axios.post("https://localhost:7083/api/systemSettings/update",
        { status: getSystemSettings?.status });
    }
  }, [getSystemSettings]
  );

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
