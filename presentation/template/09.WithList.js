import React from "react";

import {
  Appear,
  List,
  ListItem
} from "spectacle";

export default function WithList() {
  return (
    <List>
      <Appear><ListItem>Inline style based theme system</ListItem></Appear>
      <Appear><ListItem>Autofit text</ListItem></Appear>
      <Appear><ListItem>Flexbox layout system</ListItem></Appear>
      <Appear><ListItem>React-Router navigation</ListItem></Appear>
      <Appear><ListItem>PDF export</ListItem></Appear>
      <Appear><ListItem>And...</ListItem></Appear>
    </List>
  );
}
