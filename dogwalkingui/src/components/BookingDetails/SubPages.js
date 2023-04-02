import Accordion from 'react-bootstrap/Accordion';
import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Options from 'components/BookingDetails/Options';
import SelectService from 'components/BookingDetails/SelectService';
import SubPageHeader from '../../features/AdhocBooking/InputBookingDetails/SubPages/SubPageHeader';
import { useState } from 'react';

function SubPages(props) {

  const [getSelectServiceIsComplete, setSelectServiceIsComplete] = useState(false);
  const [getAboutYouIsComplete, setAboutYouIsComplete] = useState(false);
  const [getAboutYourDogIsComplete, setAboutYourDogIsComplete] = useState(false);
  const [getOptionsIsComplete, setOptionsIsComplete] = useState(false);

  var isComplete = false;
  if (getSelectServiceIsComplete
    && getAboutYouIsComplete
    && getAboutYourDogIsComplete
    && getOptionsIsComplete) {
    isComplete = true;
  }
  props.onSetInputs(isComplete);

  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <SubPageHeader title="Select service" isComplete={getSelectServiceIsComplete} />
        <Accordion.Body>
          <SelectService onSetInputs={(isComplete) => setSelectServiceIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <SubPageHeader title="About you" isComplete={getAboutYouIsComplete} />
        <Accordion.Body>
          <AboutYou onSetInputs={(isComplete) => setAboutYouIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <SubPageHeader title="About your dog(s)" isComplete={getAboutYourDogIsComplete} />
        <Accordion.Body>
          <AboutYourDog onSetInputs={(isComplete) => setAboutYourDogIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <SubPageHeader title="Options" isComplete={getOptionsIsComplete} />
        <Accordion.Body>
          <Options onSetInputs={(isComplete) => setOptionsIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SubPages;
