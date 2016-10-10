import React from "react";

import {
  Heading,
  Text,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Intro({image}) {
  return (
    <div>
      <Heading size={1} fit caps lineHeight={1} textColor="primary">
        Desarrollando con Git
      </Heading>
      <Layout>
        <Fill />
        <Fill />
        <Fill>
          <Image src={image} margin="150px 0px 0px 50px" height="180px" />
        </Fill>
      </Layout>
    </div>
  );
}
