import React from "react";

import {
  CodePane
} from "spectacle";

export default function Code() {
  return (
    <CodePane
      lang="jsx"
      source={require("raw!../../assets/deck.example")}
      margin="20px auto"
    />
  );
}
