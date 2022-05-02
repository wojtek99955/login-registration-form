import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";

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

function SignUp() {
  return (
    <Container>
      <h1>Sign Up</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            as={TextField}
            name="name"
            fullWidth
            variant="standard"
            label="Name *"
          />
          <Field
            as={TextField}
            name="surname"
            fullWidth
            variant="standard"
            label="Surname *"
          />
          <Field
            as={TextField}
            name="email"
            fullWidth
            variant="standard"
            label="Email *"
          />
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
          <Field
            as={TextField}
            name="tel"
            fullWidth
            variant="standard"
            label="Phone Number *"
          />
          <Field
            as={TextField}
            name="password"
            fullWidth
            variant="standard"
            label="Password *"
          />
          <Field
            as={TextField}
            name="confirmPassword"
            fullWidth
            variant="standard"
            label="ConfirmPassword *"
          />
          <FormControlLabel
            control={<Field as={Checkbox} name="termsAndConditions" />}
            label="I agree with Terms and Privacy."
          />
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default SignUp;
