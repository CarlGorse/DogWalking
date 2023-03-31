import BookingSummary from 'features/AdhocBooking/BookingSummary';
import Cost from 'features/AdhocBooking/Cost';
import Container from 'react-bootstrap/Container';
import InputBookingDetailsButtons from 'features/AdhocBooking/InputBookingDetailsButtons';
import InputBookingDetailsPages from 'features/AdhocBooking/InputBookingDetailsPages';
import LogIn from 'components/LogIn';
import React, { useState } from 'react';

function InputBookingDetails(props) {

  const [getShowLogIn, setShowLogIn] = useState(true);
  const [getPageId, setPageId] = useState(1);

  function nextPage() {
    setPageId(prevState => prevState + 1);
  }

  function prevPage() {
    setPageId(prevState => prevState - 1);
  }

  return (
    <>
      <LogIn show={getShowLogIn} handleClose={() => setShowLogIn(false)} description='Log in to use your preferences'></LogIn>

      <Container className="pt-5">
        <BookingSummary booking={props.booking} />
      </Container>

      <Cost cost={props.booking.cost} />

      <Container className="mt-5 mb-5">
        <InputBookingDetailsButtons
          pageId={getPageId}
          onClickPrevPage={prevPage}
          onClickNextPage={nextPage}
          onClickBook={() => props.onBookingMade(props.booking)}
          onClickCancel={() => props.onCancelBooking()}
        />
      </Container>

      <InputBookingDetailsPages pageId={getPageId} />

    </>
  );
}

export default InputBookingDetails;
