import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import * as Yup from "yup";
import Error from "./Error";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const initialValues = {
  name: "",
  surname: "",
  gender: "",
  email: "",
  tel: "",
  password: "",
  confirmPassword: "",
  termsAndConditions: false,
};
const onSubmit = (values) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 1000);
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("required"),
  surname: Yup.string().required("required"),
  email: Yup.string().email().required("required"),
  tel: Yup.number().typeError("invalid number").required("required"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Required")
    .required("Required"),
  password: Yup.string().required("required").min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("required"),
  termsAndConditions: Yup.string().oneOf(["true"], "accept terms & conditions"),
});

function SignUp() {
  return (
    <Container>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty }) => (
          <Form>
            <Field
              as={TextField}
              name="name"
              fullWidth
              variant="standard"
              label="Name *"
            />
            <ErrorMessage name="name" component={Error} />
            <Field
              as={TextField}
              name="surname"
              fullWidth
              variant="standard"
              label="Surname *"
            />
            <ErrorMessage name="surname" component={Error} />
            <Field
              as={TextField}
              name="email"
              fullWidth
              variant="standard"
              label="Email *"
            />
            <ErrorMessage name="email" component={Error} />
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Field as={RadioGroup} name="gender" row>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="male"
                />
              </Field>
            </FormControl>
            <ErrorMessage name="gender" component={Error} />
            <Field
              as={TextField}
              name="tel"
              fullWidth
              variant="standard"
              label="Phone Number *"
            />
            <ErrorMessage name="tel" component={Error} />
            <Field
              as={TextField}
              name="password"
              fullWidth
              variant="standard"
              label="Password *"
            />
            <ErrorMessage name="password" component={Error} />
            <Field
              as={TextField}
              name="confirmPassword"
              fullWidth
              variant="standard"
              label="ConfirmPassword *"
            />
            <ErrorMessage name="confirmPassword" component={Error} />
            <FormControlLabel
              control={<Field as={Checkbox} name="termsAndConditions" />}
              label={
                <span style={{ fontSize: "0.8rem" }}>
                  I agree with Terms and Privacy.
                </span>
              }
            />
            <ErrorMessage name="termsAndConditions" component={Error} />
            <Button
              variant="contained"
              type="submit"
              disabled={!(dirty && isValid)}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignUp;
