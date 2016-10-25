import React from "react";

import {
  Layout,
  Fill,
  Heading,
  Link
} from "spectacle";

export default function GaaS() {
  return (
    <Layout>
      <Fill>
        <Heading>
          <Link href="https://github.com" target="_blank" textColor="quaternary">
            Github
          </Link>
        </Heading>
      </Fill>
      <Fill>
        <Heading textColor="quaternary">
          <Link href="https://bitbucket.com" target="_blank" textColor="quaternary">
            Bitbucket
          </Link>
        </Heading>
      </Fill>
    </Layout>
  );
}
