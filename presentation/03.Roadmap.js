import React from "react";

import {
  Heading,
  List,
  ListItem,
  Layout,
  Fill
} from "spectacle";

const left = [
  'Sistemas de versionado',
  'Git',
  'Setup',
  'Clientes',
  'Git como servicio',
  'Repositorios'
];

const right = [
  'Commit',
  'Push & Remote',
  'Branches',
  'Update & Merge',
  'Logs',
  'Recursos útiles'
];

const listItems = list => (
  <List textColor="tertiary">
    {list.map(
      (item, key) => <ListItem key={key}>{item}</ListItem>
    )}
  </List>
);

export default function Roadmap() {
  return (
    <div>
      <Heading>Contenido</Heading>
      <Layout>
        <Fill>
          {listItems(left)}
        </Fill>
        <Fill>
          {listItems(right)}
        </Fill>
      </Layout>
    </div>
  );
}
