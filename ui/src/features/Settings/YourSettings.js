import AboutYou from 'components/Bookings/BookingDetails/AboutYou';
import { Accordion } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import PageHeader from 'components/Bookings/BookingDetails/PageHeader';
import { userPreferences } from 'components/Data/UserPreferences';
import { useState } from 'react';
import YourDogs from 'components/Bookings/BookingDetails/YourDogs';

function YourSettings() {

  const [getAboutYouIsComplete, setAboutYouIsComplete] = useState(false);
  const [getAboutYourDogIsComplete, setAboutYourDogIsComplete] = useState(false);

  return (
    <Container>
      <h3>Your settings</h3>

      <Accordion flush alwaysOpen>
        <Accordion.Item eventKey="1">
          <PageHeader title="About you" isComplete={getAboutYouIsComplete} />
          <Accordion.Body>
            <AboutYou
              data={userPreferences?.aboutYou}
              onSetInputs={(isComplete) => setAboutYouIsComplete(isComplete)}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <PageHeader title="Your dog(s)" isComplete={getAboutYourDogIsComplete} />
          <Accordion.Body>
            <YourDogs
              data={userPreferences?.aboutYourDogs}
              onSetInputs={(isComplete) => setAboutYourDogIsComplete(isComplete)}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </Container >
  );
}

export default YourSettings;
