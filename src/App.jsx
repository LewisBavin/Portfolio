import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Header from "./Components/1_Header";
import Content from "./Components/2_Body";
import Footer from "./Components/3_Footer";
import { Container, Row, Col } from "react-bootstrap";
import Background from "./Components/0_background";
import Background2 from "./Components/00_Background";

import gsap from "gsap";

function App() {
  return (
    <>
      <Background />
      <Background2 />
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
