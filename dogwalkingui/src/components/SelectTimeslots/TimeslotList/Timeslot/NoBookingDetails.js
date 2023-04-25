import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function NoBookingsDetails() {

  const [open, setOpen] = useState(false);

  return (
    <span style={{ visibility: 'hidden' }}>
      <Button
        size='sm'
      >
        booking
      </Button>
    </span >
  );
}

export default NoBookingsDetails;
