import React from "react";

import {
  Appear,
  Image,
  Layout,
  Fill
} from "spectacle";

export default function Problem({images}) {
  return (
    <Layout>
      <Fill>
        <Appear>
          <Image src={images.mess} />
        </Appear>
      </Fill>
        <Fill>
        <Appear>
          <Image src={images.better} />
        </Appear>
      </Fill>
    </Layout>
  );
}
