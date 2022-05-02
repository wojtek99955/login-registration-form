import styled from "styled-components";

const Container = styled.div`
  color: red;
  font-size: 0.8rem;
`;

function Error({ children }) {
  return <Container>{children}</Container>;
}

export default Error;
