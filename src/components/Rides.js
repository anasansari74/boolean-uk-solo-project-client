import { useEffect } from "react";
import styled from "styled-components";
import useStore from "../store";

import BookTicket from "../models/BookTicket";

import { TiArrowRightOutline } from "react-icons/ti";

const RidesDiv = styled.div`
  display: grid;
  grid-gap: 2rem;

  grid-template-columns: 1fr 1fr;

  .ride {
    display: grid;
    grid-auto-flow: row;

    grid-gap: 2rem;

    padding: 2rem;

    border: 0.5rem solid royalblue;
    border-radius: 1rem;
  }

  .ride-top {
    display: grid;

    grid-template-columns: auto 1fr auto;
  }

  .ride-middle {
    display: grid;
    grid-auto-flow: column;
  }

  .ride-bottom {
    display: grid;
    grid-auto-flow: column;
  }
`;

export default function Rides() {
  const searchDptLct = useStore(store => store.searchDptLct);
  const searchArvLct = useStore(store => store.searchArvLct);

  const ridesByToAndFromLct = useStore(store => store.ridesByToAndFromLct);
  const getRidesByToAndFromLct = useStore(
    store => store.getRidesByToAndFromLct
  );

  useEffect(() => {
    if (searchDptLct && searchArvLct) {
      getRidesByToAndFromLct(searchDptLct, searchArvLct);
    }
  }, [getRidesByToAndFromLct, searchDptLct, searchArvLct]);
  return (
    <RidesDiv>
      {searchDptLct && searchArvLct ? (
        ridesByToAndFromLct.map((ride, index) => (
          <div className="ride" id={ride.id} key={index}>
            <div className="ride-top">
              <p>Train Ride Id: {ride.id}</p>
              <div className="space"></div>
              <BookTicket ride={ride} />
            </div>
            <div className="ride-middle">
              <h3>{ride.departureLocation}</h3>
              <TiArrowRightOutline />
              <h3> {ride.arrivalLocation}</h3>
            </div>
            <div className="ride-bottom">
              <p>
                Date: {new Date(ride.date).getUTCDate()}/
                {new Date(ride.date).getUTCMonth()}/
                {new Date(ride.date).getUTCFullYear()}
              </p>
              <div></div>
              <h3>Price: ${ride.price}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>
          Select departure and arrival locations to view all rides availaible!
        </p>
      )}
    </RidesDiv>
  );
}
