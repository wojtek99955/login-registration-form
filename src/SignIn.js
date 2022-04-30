import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { LockOutline } from "@styled-icons/evaicons-outline/LockOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
        }}
      >
        <Form>
          <Field
            as={TextField}
            fullWidth
            variant="standard"
            type="text"
            name="username"
            placeholder="Username *"
          />
          <Field
            as={TextField}
            fullWidth
            variant="standard"
            placeholder="Password *"
            type="password"
            name="password"
          />
          <Button variant="contained" fullWidth type="submit">
            Log in
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default SignIn;
