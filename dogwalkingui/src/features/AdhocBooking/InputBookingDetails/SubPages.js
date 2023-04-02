import Accordion from 'react-bootstrap/Accordion';
import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Options from 'components/BookingDetails/Options';
import SelectService from 'components/BookingDetails/SelectService';
import SubPageHeader from './SubPageHeader';
import { useState } from 'react';

function SubPages(props) {

  const [getSelectServiceIsComplete, setSelectServiceIsComplete] = useState(false);
  const [getAboutYouIsComplete, setAboutYouIsComplete] = useState(false);
  const [getAboutYourDogIsComplete, setAboutYourDogIsComplete] = useState(false);
  const [getOptionsIsComplete, setOptionsIsComplete] = useState(false);

  function onSetInputs() {
    var isComplete = false;
    if (getSelectServiceIsComplete
      && getAboutYouIsComplete
      && getAboutYourDogIsComplete
      && getOptionsIsComplete) {
      isComplete = true;
    }
    props.onSetInputs(isComplete);
  }

  function onSetSelectServiceIsComplete(isComplete) {
    setSelectServiceIsComplete(isComplete)
    onSetInputs();
  }

  function onSetAboutYouIsComplete(isComplete) {
    setAboutYouIsComplete(isComplete)
    onSetInputs();
  }

  function onSetAboutYourDogIsComplete(isComplete) {
    setAboutYourDogIsComplete(isComplete)
    onSetInputs();
  }

  function onSetOptionsIsComplete(isComplete) {
    setOptionsIsComplete(isComplete)
    onSetInputs();
  }

  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <SubPageHeader title="Select service" isComplete={getSelectServiceIsComplete} />
        <Accordion.Body>
          <SelectService onSetInputs={(isComplete) => onSetSelectServiceIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <SubPageHeader title="About you" isComplete={getAboutYouIsComplete} />
        <Accordion.Body>
          <AboutYou onSetInputs={(isComplete) => onSetAboutYouIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <SubPageHeader title="About your dog(s)" isComplete={getAboutYourDogIsComplete} />
        <Accordion.Body>
          <AboutYourDog onSetInputs={(isComplete) => onSetAboutYourDogIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <SubPageHeader title="Options" isComplete={getOptionsIsComplete} />
        <Accordion.Body>
          <Options onSetInputs={(isComplete) => onSetOptionsIsComplete(isComplete)} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SubPages;
