import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 1rem;
  -webkit-box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  -moz-box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  border-radius: 5px;
`;

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <Container>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab sx={{ width: "50%" }} label="SIGN IN" />
          <Tab sx={{ width: "50%" }} label="SIGN UP" />
        </Tabs>
        {value === 0 && <SignIn />}
        {value === 1 && <SignUp />}
      </Container>
    </div>
  );
}

export default App;
