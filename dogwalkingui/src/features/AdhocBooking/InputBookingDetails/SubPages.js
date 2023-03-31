import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Options from 'components/BookingDetails/Options';
import React, { useState } from 'react';
import SelectService from 'components/BookingDetails/SelectService';

function SubPages(props) {

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
    <>
      {selectService}
      {aboutYou}
      {aboutYourDog}
      {options}
    </>
  );
}

export default SubPages;
