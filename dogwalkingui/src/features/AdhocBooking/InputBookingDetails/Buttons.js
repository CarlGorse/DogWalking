import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

function InputBookingDetailsButtons(props) {

  return (
    <Container>
      <Button variant='secondary' onClick={props.onClickPrevPage} disabled={props.pageId == 1}>Previous</Button>
      <Button variant='secondary' onClick={props.onClickNextPage} disabled={props.pageId == 4}>Next</Button>
      <Button variant='primary' className="ms-3" onClick={props.onClickBook} disabled={props.pageId != 4}>Book</Button>
      <Button variant='light' onClick={props.onClickCancel}>Cancel</Button>
    </Container>
  );
}

export default InputBookingDetailsButtons;
