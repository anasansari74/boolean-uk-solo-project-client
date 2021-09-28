import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import styled from "styled-components";
import useStore from "../store";

const BookTicketDiv = styled.div``;

const ModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export default function BookTicket({ ride }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loggedInUserId = useStore(store => store.loggedInUserId);
  const bookTicket = useStore(store => store.bookTicket);

  const handleClick = rideId => {
    const bookingDetails = {
      userId: loggedInUserId,
      trainRideId: rideId,
      rideClass: "ECONOMY",
    };

    bookTicket(bookingDetails);

    handleClose();
  };

  return (
    <BookTicketDiv>
      <Button variant="info" onClick={handleShow}>
        Book
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm your Booking!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalBody>
            <div>
              <p>Dpt Location:</p>
              <p>
                <strong>{ride.departureLocation}</strong>
              </p>
            </div>
            <div>
              <p>Dpt Time:</p>
              <p>
                <strong>{ride.departureTime}</strong>
              </p>
            </div>
            <div>
              <p>Arv Location:</p>
              <p>
                <strong>{ride.arrivalLocation}</strong>
              </p>
            </div>
            <div>
              <p>Arv Time:</p>
              <p>
                <strong>{ride.arrivalTime}</strong>
              </p>
            </div>
            <div>
              <p>Date:</p>
              <p>
                <strong>
                  {new Date(ride.date).getUTCDate()}/
                  {new Date(ride.date).getUTCMonth()}/
                  {new Date(ride.date).getUTCFullYear()}
                </strong>
              </p>
            </div>
            <div>
              <p>Price:</p>
              <p>
                <strong>${ride.price}</strong>
              </p>
            </div>
          </ModalBody>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClick(ride.id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </BookTicketDiv>
  );
}
