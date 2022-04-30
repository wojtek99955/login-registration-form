import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Container = styled.div`
  width: 500px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin: auto;
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
