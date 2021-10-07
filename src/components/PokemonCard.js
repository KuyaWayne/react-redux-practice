import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import Swal from 'sweetalert2';

export default function PokemonCard({ pokemon }) {
  const likesCounter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  function handleIncrement(event) {
    event.preventDefault();

    if (likesCounter < 10) {
      dispatch({ type: 'INCREMENT' });
    } else {
      Swal.fire({
        title: 'You have reached the limit',
        text: 'You can only like 10 sticky notes',
        icon: 'error',
      });
    }
  }

  function handleDecrement(event) {
    event.preventDefault();

    if (likesCounter > 0) {
      dispatch({ type: "DECREMENT" });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You can\'t go below 0!',
      })
    }
  }

  return (
    <Card className="mb-3">
      <Card.Header className="text-center">
        <strong>{`Sticky Note #${pokemon}`}</strong>
      </Card.Header>

      <Card.Body className="d-flex justify-content-center">
        <Badge bg="primary">{likesCounter.toString()}</Badge>
      </Card.Body>

      <Card.Footer>
        <ButtonGroup className="d-flex">
          <Button variant="danger" onClick={handleDecrement}>Unlike</Button>
          <Button variant="primary" onClick={handleIncrement}>Like</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  )
}
