import styled from "styled-components";
import { Formik, Form, Field } from "formik";
// import { LockOutline } from "@styled-icons/evaicons-outline/LockOutline";
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
// const IconContainer = styled.div`
//   margin: 2rem 0;
//   padding: 0.3rem;

//   background: orange;
//   border-radius: 50%;
// `;
// const LockIcon = styled(LockOutline)`
//   width: 2rem;
//   margin: auto;
//   color: white;
// `;

function SignIn({ setValue }) {
  const handleChangeTab = () => {
    setValue(1);
  };
  return (
    <Container>
      {/* <IconContainer>
        <LockIcon />
      </IconContainer> */}
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
