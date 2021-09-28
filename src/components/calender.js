import styled from "styled-components";

import {} from "../helper";
import useStore from "../store";

const CalenderDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  height: 100%;
  width: 100%;

  .day {
    display: grid;
    grid-template:
      "name day" auto
      "price price" 1fr
      "cheapest cheapest" auto/
      1fr 1fr;

    place-items: center;

    height: 7rem;

    border: 0.5px solid silver;
  }

  .name {
    grid-area: name;
  }

  .day-inside {
    grid-area: day;
  }

  .price {
    grid-area: price;

    color: royalblue;
  }

  .cheapest {
    grid-area: cheapest;

    border-radius: 0.2rem;

    color: #955200;
    font-weight: bold;
    background-color: #fff6b1;

    padding: 0 0.2rem;
  }

  . .weekend {
    color: green;
  }
`;

export default function Calender() {
  const ridesByToAndFromLct = useStore(store => store.ridesByToAndFromLct);

  let prices = ridesByToAndFromLct.map(ride => ride.price);

  let lowestPrice = Math.min(...prices);

  let cheapestRide = ridesByToAndFromLct.find(
    ride => ride.price === lowestPrice
  );

  let grid = [];

  const isWeekend = day => {
    // is 6 when its saturday, 0 when its sunday
    return day % 7 === 6 || day % 7 === 0;
  };

  const getDayByName = day => {
    const date = new Date(Date.UTC(2021, 10, day));
    date.getDate();
    date.getMonth();
    date.getFullYear();

    return new Intl.DateTimeFormat("en-GB", { weekday: "short" }).format(date);
  };

  const handleClick = day => {
    console.log(day);
  };

  for (let day = 1; day <= 31; day++) {
    //Marking the weekends
    const weekend = isWeekend(day);

    //Marking the first 7 days with their name (i.e. sun, mon, tue...)
    let name = "";
    if (day <= 7) {
      const dayName = getDayByName(day);
      name = <div className="name">{dayName}</div>;
    }

    grid.push(
      <div
        className={`day ${weekend ? "weekend" : ""}`}
        key={day}
        onClick={() => {
          handleClick(day);
        }}
      >
        {name}
        <div className="day-inside">{day}</div>
        {ridesByToAndFromLct.map(ride =>
          new Date(ride.date).getDate() === day ? (
            <>
              <h3 className="price">
                <a href={`#${ride.id}`}>${ride.price}</a>
              </h3>
              {ride.id === cheapestRide.id ? (
                <p className="cheapest">cheapest</p>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <div className="price"></div>
              <p className="cheapest"></p>
            </>
          )
        )}
      </div>
    );
  }

  return <CalenderDiv>{grid}</CalenderDiv>;
}
