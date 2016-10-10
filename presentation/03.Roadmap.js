import React from "react";

import {
  Appear,
  List,
  ListItem,
  Layout,
  Fill
} from "spectacle";

export default function Roadmap() {
  return (
    <Layout>
    <Fill>
    <List ordered textColor="tertiary">
      <Appear><ListItem>Sistemas de versionado</ListItem></Appear>
      <Appear><ListItem>Git</ListItem></Appear>
      <Appear><ListItem>Setup</ListItem></Appear>
      <Appear><ListItem>Clientes</ListItem></Appear>
      <Appear><ListItem>Git como servicio</ListItem></Appear>
      <Appear><ListItem>Repositorios: init & clone</ListItem></Appear>
      <Appear><ListItem>Workflow</ListItem></Appear>
      <Appear><ListItem>Add & Commit</ListItem></Appear>
      <Appear><ListItem>Pushing changes</ListItem></Appear>
    </List>
    </Fill>
    <Fill>
      <List ordered textColor="tertiary">
        <Appear><ListItem>Branching</ListItem></Appear>
        <Appear><ListItem>Update & Merge</ListItem></Appear>
        <Appear><ListItem>Tags???</ListItem></Appear>
        <Appear><ListItem>Log</ListItem></Appear>
        <Appear><ListItem>Replace local changes</ListItem></Appear>
        <Appear><ListItem>Merge conflicts =/</ListItem></Appear>
      </List>
    </Fill>
    </Layout>
  );
}
