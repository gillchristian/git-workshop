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
  'Repositorios',
  'Add & Commit'
];

const right = [
  'Push',
  'Branches',
  'Update & Merge',
  'Tags',
  'Logs',
  'Replazar cambios locales',
  'Conflictos con el Merge'
];

const listItems = list => list.map(
  (item, key) => <ListItem key={key}>{item}</ListItem>
);

export default function Roadmap() {
  return (
    <div>
      <Heading>Contenido</Heading>
      <Layout>
        <Fill>
          <List ordered textColor="tertiary">
            {listItems(left)}
          </List>
        </Fill>
        <Fill>
          <List ordered textColor="tertiary">
            {listItems(right)}
          </List>
        </Fill>
      </Layout>
    </div>
  );
}
