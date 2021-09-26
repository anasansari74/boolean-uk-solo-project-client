import styled from "styled-components";

import {} from "../helper";

const CalenderDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  height: 100%;
  width: 100%;

  .day {
    display: grid;
    place-items: center;

    height: 7rem;

    border: 0.5px solid black;
  }

  .weekend {
    color: red;
  }
`;

export default function Calender() {
  let grid = [];

  const isWeekend = day => {
    // is 6 when its saturday, 0 when its sunday
    return day % 7 === 6 || day % 7 === 0;
  };

  for (let day = 1; day <= 31; day++) {
    const weekend = isWeekend(day);

    grid.push(
      <div className={`day ${weekend ? "weekend" : ""}`} key={day}>
        {day}
      </div>
    );
  }

  return <CalenderDiv>{grid}</CalenderDiv>;
}
