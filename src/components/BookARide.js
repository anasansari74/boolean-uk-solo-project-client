import styled from "styled-components";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Calender from "./calender";

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
`;

export default function BookARide() {
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
            <Form.Select aria-label="Default select example" size="lg">
              <option>Select departure location</option>
              <option value="1"> One</option>
              <option value="2"> Two</option>
              <option value="3"> Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="text">
            <Form.Label>To:</Form.Label>
            <Form.Select aria-label="Default select example" size="lg">
              <option>Select arrival location</option>
              <option value="1"> One</option>
              <option value="2"> Two</option>
              <option value="3"> Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="text">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" name="date" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="calender">
        <h3>Low prices found by our customers</h3>
        <Calender />
      </div>
    </ViewBookingsDiv>
  );
}
