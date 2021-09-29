import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store";
import Button from "react-bootstrap/Button";

const ViewBookingsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 2rem 15%;

  .ticket {
    display: grid;
    grid-template-rows: auto 1fr;

    padding: 1rem;
    margin: 1rem;

    border: 2px solid royalblue;
    border-radius: 2rem;

    grid-gap: 1rem;
  }

  .ticket-top {
    display: grid;
    grid-template-columns: auto auto;

    place-items: center;
  }

  .ticket-main {
    display: grid;
    place-items: center;
  }
`;

export default function ViewBookings() {
  const loggedInUserId = useStore(store => store.loggedInUserId);
  const userTickets = useStore(store => store.userTickets);
  const getUserTickets = useStore(store => store.getUserTickets);
  const deleteTicket = useStore(store => store.deleteTicket);

  const handleClick = rideId => {
    deleteTicket(loggedInUserId, rideId);
  };

  useEffect(() => {
    getUserTickets(loggedInUserId);
  }, [getUserTickets, loggedInUserId]);
  return (
    <ViewBookingsDiv>
      {userTickets.lenght === 0 ? (
        <p>Book some Tickets first!</p>
      ) : (
        userTickets.map((ticket, index) => (
          <div key={index} className="ticket">
            <div className="ticket-top">
              <div>
                <strong>Id: {ticket.trainRides.id}</strong>
              </div>
              <Button
                variant="danger"
                onClick={() => handleClick(ticket.trainRides.id)}
              >
                Delete
              </Button>
            </div>
            <div className="ticket-main">
              <div>
                <strong>From: {ticket.trainRides.departureLocation}</strong>
              </div>
              <div>
                <strong>To: {ticket.trainRides.arrivalLocation}</strong>
              </div>
              <div>
                <strong>Price: ${ticket.trainRides.price}</strong>
              </div>
            </div>
          </div>
        ))
      )}
    </ViewBookingsDiv>
  );
}
