import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Content />
    </Container>
  );
}

export default App;
