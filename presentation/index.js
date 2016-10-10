// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import Intro from "./01.Intro";
import Me from "./02.Me";
import Roadmap from "./03.Roadmap";
import Code from "./template/03.Code";
import Progressive from "./template/04.Progressive";
import Flexbox from "./template/05.Flexbox";
import Cita from "./template/06.Cita";
import WithMarkdown from "./template/07.WithMarkdown";
import Transition from "./template/08.Transition";
import WithList from "./template/09.WithList";
import WithApp from "./template/10.WithApp";
import End from "./template/11.End";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  gitLogo: require("../assets/git-logo.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#e06666",
  secondary: "#333333",
  tertiary: "white",
  quaternary: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={750}>
          <Slide bgColor="secondary">
            <Intro image={images.gitLogo.replace("/", "")}/>
          </Slide>
          <Slide bgColor="primary">
            <Me />
          </Slide>
          <Slide bgColor="secondary">
            <Roadmap />
          </Slide>
          <Slide bgColor="primary">
            <Code />
          </Slide>
          <Slide
            transition={["slide"]}
            bgImage={images.city.replace("/", "")}
            bgDarken={0.75}
          >
            <Progressive />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Flexbox />
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Cita />
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="primary">
            <WithMarkdown image={images.markdown.replace("/", "")}/>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Transition />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <WithList />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <WithApp />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <End image={images.logo}/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
