import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Options from 'components/BookingDetails/Options';
import SelectService from 'components/BookingDetails/SelectService';
import React from 'react';

function UserSettings(props) {

  return (
    <>

      <p>You can change your own settings here.</p>

      <SelectService />
      <AboutYou />
      <AboutYourDog />
      <Options />
    </>
  );
}

export default UserSettings;
