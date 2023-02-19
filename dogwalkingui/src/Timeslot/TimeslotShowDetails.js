import Button from 'react-bootstrap/Button';
import TimeslotDetailsModal from './TimeslotDetailsModal';
import { useState } from 'react';

function TimeslotShowDetails(props) {

  const [getShowDetails, setShowDetails] = useState(false);

  function handleHideDetails() {
    setShowDetails(false);
  };

  return (
    <>
      <TimeslotDetailsModal
        show={getShowDetails}
        handleHideDetails={handleHideDetails}
        timeslot={props.timeslot}
      />
      <Button
        variant='info'
        size="sm"
        onClick={() => setShowDetails(true)}
      >(details)</Button>
    </>
  );
}

export default TimeslotShowDetails;
