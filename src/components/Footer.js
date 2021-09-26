import styled from "styled-components";

const FooterDiv = styled.div`
  display: grid;

  margin: 0 15%;

  height: 5rem;

  align-items: center;

  border-top: 0.5px solid silver;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <h2>This is the Footer</h2>
    </FooterDiv>
  );
}
