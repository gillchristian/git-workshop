import React from "react";

import {
  Heading,
  Link,
  Text
} from "spectacle";

export default function Me() {
  return (
    <div>
      <Heading size={4} textColor="tertiary">Christian Gill</Heading>
      <Text margin="50px 0px 0px">
        <Link href="https://gillchristian.xyz" target="_blank" textColor="quaternary">
          Full Stack JS
        </Link>
        {' @ '}
        <Link href="https://www.altoroslabs.com" target="_blank" textColor="quaternary">
          Altoros
        </Link>
      </Text>
    </div>
  );
}
