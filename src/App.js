import React, { Fragment } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Content from "./components/Content";
import ContentWriting from "./components/ContentWriting";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Fragment>
      <Container>
        <Navbar />
        <Main />
        <Content />
        <ContentWriting />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;
