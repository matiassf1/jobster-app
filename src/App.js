import { Landing } from "./pages/Landing"
import styled from "styled-components"

const Button = styled.button`
  background: red;
  color: white;
  font-size: 2rem;
`;
const SecondButton = styled.button`
  background: blue;
  color: white;
  font-size: 3rem;
`;

export const App = () => {
  return (
    <>
      {/* <Button>Click</Button> */}
      {/* <SecondButton>Click</SecondButton> */}
      <Landing />
    </>
  )
}
