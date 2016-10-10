import React from "react";

import {
  Heading,
  Layout,
  Fill
} from "spectacle";

export default function Flexbox() {
  return (
    <div>
      <Heading caps fit>Flexible Layouts</Heading>
      <Layout>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Left
          </Heading>
        </Fill>
        <Fill>
          <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
            Right
          </Heading>
        </Fill>
      </Layout>
    </div>
  );
}
