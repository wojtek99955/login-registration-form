import styled from "styled-components";
import { Formik, Form } from "formik";
import { LockOutline } from "@styled-icons/evaicons-outline/LockOutline";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
`;
const LockIcon = styled(LockOutline)`
  width: 2rem;
  margin: auto;
`;

function SignIn() {
  return (
    <Container>
      <LockIcon />
      <h1>Sign In</h1>
    </Container>
  );
}

export default SignIn;
