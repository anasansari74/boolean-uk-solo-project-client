import styled from "styled-components";
import useStore from "../store";

import BookARide from "../components/BookARide";
import ViewBookings from "../components/ViewBookings";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const HomePageDiv = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  margin: 2rem 0;

  .home-page-header {
    display: grid;

    align-items: center;

    margin: 2rem 20%;
  }
`;

export default function HomePage() {
  const homePage = useStore(state => state.homePage);

  const bookHomePage = useStore(state => state.bookHomePage);
  const viewHomePage = useStore(state => state.viewHomePage);

  const radioValue = useStore(state => state.radioValue);
  const setRadioValue = useStore(state => state.setRadioValue);

  return (
    <HomePageDiv>
      <div className="home-page-header">
        <ButtonGroup>
          <ToggleButton
            key={1}
            id={`radio-${1}`}
            type="radio"
            variant={1 % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={"1"}
            checked={radioValue === "1"}
            onChange={e => setRadioValue(e.currentTarget.value)}
            onClick={() => bookHomePage(homePage)}
          >
            Book A Ride
          </ToggleButton>

          <ToggleButton
            key={2}
            id={`radio-${2}`}
            type="radio"
            variant={2 % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={"2"}
            checked={radioValue === "2"}
            onChange={e => setRadioValue(e.currentTarget.value)}
            onClick={() => viewHomePage(homePage)}
          >
            My Bookings
          </ToggleButton>
        </ButtonGroup>
      </div>
      <div className="home-page-body">
        {homePage === "book" ? <BookARide /> : <ViewBookings />}
      </div>
    </HomePageDiv>
  );
}
