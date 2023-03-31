import AboutYou from './AboutYou';
import AboutYourDog from './AboutYourDog';
import Options from './Options';
import SelectService from './SelectService';

function BookingDetails() {

  return (
    <>
      <SelectService />
      <AboutYou />
      <AboutYourDog />
      <Options />
    </>
  );
}

export default BookingDetails;
