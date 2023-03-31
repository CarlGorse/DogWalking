import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Container from 'react-bootstrap/Container';
import Options from 'components/BookingDetails/Options';
import React, { useState } from 'react';
import SelectService from 'components/BookingDetails/SelectService';

function InputBookingDetailsPages(props) {

  var selectService;
  var aboutYou;
  var aboutYourDog;
  var options;

  if (props.pageId == 1) {
    selectService = <SelectService />;
  }
  if (props.pageId == 2) {
    aboutYou = <AboutYou />;
  }
  if (props.pageId == 3) {
    aboutYourDog = <AboutYourDog />;
  }
  if (props.pageId == 4) {
    options = <Options />;
  }

  return (
    <Container>
      {selectService}
      {aboutYou}
      {aboutYourDog}
      {options}
    </Container>
  );
}

export default InputBookingDetailsPages;
