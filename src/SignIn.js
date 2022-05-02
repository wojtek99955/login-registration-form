import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

function SignIn({ setValue }) {
  const handleChangeTab = () => {
    setValue(1);
  };
  return (
    <Container>
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
            label="Username *"
          />
          <Field
            as={TextField}
            fullWidth
            variant="standard"
            label="Password *"
            type="password"
            name="password"
          />
          <Button
            sx={{ margin: "1.5rem 0" }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Log in
          </Button>
          <Link
            href="#"
            underline="none"
            sx={{ fontSize: "0.8rem" }}
            onClick={handleChangeTab}
          >
            Don't have an account? Sign Up here!
          </Link>
        </Form>
      </Formik>
    </Container>
  );
}

export default SignIn;
