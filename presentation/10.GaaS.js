import React from "react";

import {
  Layout,
  Fill,
  Heading
} from "spectacle";

export default function GaaS() {
  return (
    <Layout>
      <Fill>
        <Heading textColor="quaternary">Github</Heading>
      </Fill>
      <Fill>
        <Heading textColor="quaternary">Bitbucket</Heading>
      </Fill>
    </Layout>
  );
}
