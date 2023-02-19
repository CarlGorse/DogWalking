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
        status={props.status}
        location={props.location}
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
