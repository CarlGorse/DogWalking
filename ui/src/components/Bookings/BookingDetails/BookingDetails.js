import Accordion from 'react-bootstrap/Accordion';
import AboutYou from './Components/AboutYou';
import AboutYourDog from './Components/AboutYourDog/AboutYourDog';
import Options from './Components/Options';
import PageHeader from './Components/PageHeader';
import SelectService from './Components/SelectService';
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
