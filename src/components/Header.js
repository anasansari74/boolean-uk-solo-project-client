import styled from "styled-components";

import Button from "react-bootstrap/Button";

import useStore from "../store";

const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;

  place-items: center;

  height: 5rem;

  margin: 0 15%;

  align-items: center;

  border-bottom: 0.5px solid silver;

  background-color: white;

  h2 {
    color: linear-gradient(180deg, black, silver);
  }
`;

export default function Header() {
  const loggedInUserId = useStore(store => store.loggedInUserId);
  const logOutUser = useStore(store => store.logOutUser);

  const handleLogout = e => {
    e.preventDefault();
    logOutUser();
  };
  return (
    <HeaderDiv>
      <h2>Silver Train</h2>
      <div></div>
      {loggedInUserId === null ? (
        <></>
      ) : (
        <Button variant="info" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </HeaderDiv>
  );
}
