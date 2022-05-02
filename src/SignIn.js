import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import * as Yup from "yup";

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

  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
    }, 1000);
  };
  const schemaValidation = Yup.object({
    username: Yup.string().required("type name"),
    password: Yup.string().required("type password").min(6),
  });
  return (
    <Container>
      <h1>Sign In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schemaValidation}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              fullWidth
              variant="standard"
              type="text"
              name="username"
              label="Username *"
            />
            <ErrorMessage name="username" />
            <Field
              as={TextField}
              fullWidth
              variant="standard"
              label="Password *"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" />
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
        )}
      </Formik>
    </Container>
  );
}

export default SignIn;
