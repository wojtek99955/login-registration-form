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
const validationSchema = Yup.object({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().email().required(),
  tel: Yup.number().required(),
  password: Yup.string().required().min(6),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required(),
  termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions"),
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
            <RadioGroup name="gender" row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
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
            label="I agree with Terms and Privacy."
          />
          <ErrorMessage name="termsAndConditions" component={Error} />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default SignUp;
