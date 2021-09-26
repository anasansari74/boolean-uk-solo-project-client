import styled from "styled-components";

const HeaderDiv = styled.div`
  display: grid;

  height: 5rem;

  margin: 0 15%;

  align-items: center;

  border-bottom: 0.5px solid silver;

  background-color: white;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <h2>This is the Header</h2>
    </HeaderDiv>
  );
}
