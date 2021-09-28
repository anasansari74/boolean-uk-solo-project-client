import { useEffect } from "react";

import styled from "styled-components";

import { removeDuplicateObjectFromArray } from "../helper";
import useStore from "../store";

import Calender from "./calender";

import Form from "react-bootstrap/Form";
import Rides from "./Rides";

const ViewBookingsDiv = styled.div`
  display: grid;

  width: 100%;

  grid-gap: 3rem;

  .search-div {
    display: grid;
    grid-template-columns: 1fr 1fr;

    background-image: url("https://www.thetrainline.com/content/vul/hero-images/city/manchester/1x.jpg");
  }

  .search-div-header {
    height: auto;
    width: auto;

    padding: 2rem;
    margin: 50% 2rem 0 2rem;

    color: white;
    font-size: 1.5rem;
  }

  .search-form {
    display: grid;

    height: auto;
    width: 60%;

    padding: 2rem;
    margin: 2rem;

    background-color: white;

    border: 0.5rem solid royalblue;
    border-radius: 1rem;
  }

  .calender {
    display: grid;
    grid-gap: 1rem;

    place-items: center;

    margin: 1rem 15%;
  }

  .rides {
    display: grid;

    margin: 2rem 15%;
  }
`;

export default function BookARide() {
  const allRides = useStore(store => store.allRides);
  const getAllRides = useStore(store => store.getAllRides);

  const setSearchDptLct = useStore(store => store.setSearchDptLct);
  const setSearchArvLct = useStore(store => store.setSearchArvLct);
  const setSearchDate = useStore(store => store.setSearchDate);

  const uniqueLocations = removeDuplicateObjectFromArray(
    allRides,
    "departureLocation"
  );

  useEffect(() => {
    getAllRides();
  }, [getAllRides]);
  return (
    <ViewBookingsDiv>
      <div className="search-div">
        <div className="search-div-header">
          <h1>Silver Train</h1>
          <p>Save 61% on average when you buy in advance</p>
        </div>
        <Form className="search-form">
          <h1>Get times and tickets</h1>

          <Form.Group className="mb-3" controlId="text">
            <Form.Label>From:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              size="lg"
              onChange={e => setSearchDptLct(e.target.value)}
            >
              <option>Select departure location</option>
              {uniqueLocations.map((location, index) => (
                <option
                  key={index}
                  name="dptlct"
                  value={location.departureLocation}
                >
                  {" "}
                  {location.departureLocation}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>To:</Form.Label>
            <Form.Select
              aria-label="Default select example"
              size="lg"
              onChange={e => setSearchArvLct(e.target.value)}
            >
              <option>Select arrival location</option>
              {uniqueLocations.map((location, index) => (
                <option
                  key={index}
                  name="arvlct"
                  value={location.arrivalLocation}
                >
                  {" "}
                  {location.arrivalLocation}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={e => setSearchDate(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>

      <div className="calender">
        <h3>Low prices found by our customers</h3>
        <Calender />
      </div>

      <div className="rides">
        <h3>Train Rides:</h3>
        <Rides />
      </div>
    </ViewBookingsDiv>
  );
}
