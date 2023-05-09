import { Accordion } from 'react-bootstrap';
import AboutYou from './BookingDetails/AboutYou';
import AboutYourDog from './BookingDetails/AboutYourDog';
import Options from './BookingDetails/Options';
import PageHeader from './BookingDetails/PageHeader';
import SelectService from './BookingDetails/SelectService';
import { useState } from 'react';

function BookingDetails({ data, onSetInputs }) {

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
  onSetInputs?.(isComplete);

  return (
    <Accordion flush alwaysOpen>
      <Accordion.Item eventKey="0">
        <PageHeader title="Select service" isComplete={getSelectServiceIsComplete} />
        <Accordion.Body>
          <SelectService
            data={data?.selectService}
            onSetInputs={(isComplete) => setSelectServiceIsComplete(isComplete)}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <PageHeader title="About you" isComplete={getAboutYouIsComplete} />
        <Accordion.Body>
          <AboutYou
            data={data?.aboutYou}
            onSetInputs={(isComplete) => setAboutYouIsComplete(isComplete)}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <PageHeader title="About your dog(s)" isComplete={getAboutYourDogIsComplete} />
        <Accordion.Body>
          <AboutYourDog
            data={data?.aboutYourDogs}
            onSetInputs={(isComplete) => setAboutYourDogIsComplete(isComplete)}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <PageHeader title="Options" isComplete={getOptionsIsComplete} />
        <Accordion.Body>
          <Options
            data={data?.options}
            onSetInputs={(isComplete) => setOptionsIsComplete(isComplete)}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BookingDetails;
