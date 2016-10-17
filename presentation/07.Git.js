import React from "react";

import {
  Layout,
  Fill,
  Image,
  Heading,
  Link
} from "spectacle";

export default function Git({image}) {
  return (
    <Layout style={{alignItems: 'center'}}>
      <Fill>
        <Link href="https://git-scm.com/" target="_blank">
          <Heading>GIT</Heading>
        </Link>
      </Fill>
      <Fill>
        <Image src={image} />
      </Fill>

    </Layout>

  );
}
