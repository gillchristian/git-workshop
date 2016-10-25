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
import Problem from "./04.Problem";
import Solution from "./05.Solution";
import AllTheThings from "./06.AllTheThings";
import Git from "./07.Git";
import Setup from "./08.Setup";
import Clients from "./09.Clients";
import GaaS from "./10.GaaS";
import HowItWorks from "./11.HowItWorks";
import Create from "./12.Create";
import AddCommit from "./13.AddCommit";
import Push from "./14.Push";
import Branches from "./15.Branches";
import UpdateAndMerge from "./16.UpdateAndMerge";
import Logs from "./17.Logs";
import Thanks from "./18.Thanks";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  allTheThings: require("../assets/all-the-things.jpg"),
  branches: require("../assets/branches.png"),
  city: require("../assets/city.jpg"),
  client: require("../assets/client.png"),
  foldersMess: require("../assets/git-mess.png"),
  foldersBetter: require("../assets/git-better.png"),
  gitLogo: require("../assets/git-logo.png"),
  howGitWorks: require("../assets/how-git-works.png"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  setup: require("../assets/setup.jpg"),
  thanks: require("../assets/thanks.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#e06666",
  secondary: "#333333",
  tertiary: "white",
  quaternary: "#22BAD9"
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
            <Problem
              images={{
                mess: images.foldersMess.replace("/", ""),
                better: images.foldersBetter.replace("/", ""),
              }}
            />
          </Slide>
          <Slide bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Solution />
          </Slide>
          <Slide transition={["slide"]} bgColor="tertiary">
            <AllTheThings image={images.allTheThings.replace("/", "")} />
          </Slide>
          <Slide bgColor="secondary" align="center center">
            <Git image={images.gitLogo.replace("/", "")} />
          </Slide>
          <Slide bgImage={images.setup.replace("/", "")} bgDarken={0.75}>
            <Setup />
          </Slide>
          <Slide bgImage={images.client.replace("/", "")} bgDarken={0.75}>
            <Clients />
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="secondary">
            <GaaS />
          </Slide>
          <Slide bgColor="primary" bgColor="#4c0d09">
            <HowItWorks image={images.howGitWorks.replace("/", "")} />
          </Slide>
          <Slide bgColor="primary">
            <Create />
          </Slide>
          <Slide bgColor="primary">
            <AddCommit />
          </Slide>
          <Slide bgColor="primary">
            <Push />
          </Slide>
          <Slide bgColor="black">
            <Branches image={images.branches.replace("/", "")} />
          </Slide>
          <Slide bgColor="primary">
            <UpdateAndMerge />
          </Slide>
          <Slide bgColor="primary">
            <Logs />
          </Slide>
          <Slide bgColor="secondary">
            <Thanks image={images.thanks.replace("/", "")} />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
