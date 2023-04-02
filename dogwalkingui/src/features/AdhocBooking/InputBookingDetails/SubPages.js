import Accordion from 'react-bootstrap/Accordion';
import AboutYou from 'components/BookingDetails/AboutYou';
import AboutYourDog from 'components/BookingDetails/AboutYourDog';
import Options from 'components/BookingDetails/Options';
import SelectService from 'components/BookingDetails/SelectService';
import SubPageHeader from './SubPageHeader';

function SubPages(props) {

  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <SubPageHeader title="Select service" isComplete={true} />
        <Accordion.Body>
          <SelectService />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <SubPageHeader title="About you" isComplete={true} />
        <Accordion.Body>
          <AboutYou />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <SubPageHeader title="About your dog(s)" isComplete={true} />
        <Accordion.Body>
          <AboutYourDog />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <SubPageHeader title="Options" isComplete={false} />
        <Accordion.Body>
          <Options />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SubPages;
