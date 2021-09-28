import styled from "styled-components";

const FooterDiv = styled.div`
  display: grid;
  grid-auto-flow: column;

  margin: 0 15%;

  height: 5rem;

  align-items: center;

  border-top: 0.5px solid silver;

  background: linear-gradient(0deg, white, silver);

  p {
    padding: 0.5rem;
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <p>&#169; Silver Train</p>
      <div>
        <p>Contact Us:</p>
        <p> silver_train@gmail.com</p>
      </div>
    </FooterDiv>
  );
}
