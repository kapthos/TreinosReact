import React from "react";
import styled from "styled-components"
import { PostIt } from "./Components/PostIt/PostIt";

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  height: 100vh;
  background: #444;

  & div:nth-child(2n) {
    background: #CDFFCC;
  }

  & div:nth-child(5) {
    background-color: #FFFFCD;
  }

  & div:nth-child(6) {
    background-color: #CCCCFE;
  }

  & div:nth-child(3) {
    background-color: #3CaCF3;
  }

  @media(max-width: 400px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }

`
function App() {
  return (
    <div className="App">
      <Container>
        <PostIt titulo="Title #1" texto="Text content #1"/>
        <PostIt titulo="Title #2" texto="Text content #2"/>
        <PostIt titulo="Title #3" texto="Text content #3"/>
        <PostIt titulo="Title #4" texto="Text content #4"/>
        <PostIt titulo="Title #5" texto="Text content #5"/>
        <PostIt titulo="Title #6" texto="Text content #6"/>
      </Container>
    </div>
  );
}

export default App;
