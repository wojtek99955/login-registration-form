import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { LockOutline } from "@styled-icons/evaicons-outline/LockOutline";

const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: auto;
  -webkit-box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  -moz-box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  box-shadow: 8px 8px 36px -7px rgba(66, 68, 90, 0.34);
  border-radius: 5px;
  margin-top: 5rem;
`;
const Content = styled.div`
  padding: 1rem;
`;
const IconContainer = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  margin: 0.5rem auto;
  background: orange;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LockIcon = styled(LockOutline)`
  width: 2rem;
  margin: auto;
  color: white;
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
        <Content>
          <IconContainer>
            <LockIcon />
          </IconContainer>
          {value === 0 && <SignIn setValue={setValue} />}
          {value === 1 && <SignUp />}
        </Content>
      </Container>
    </div>
  );
}

export default App;
