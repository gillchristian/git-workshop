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
        <Link href="https://gillchristian.xyz" textColor="#22BAD9">
          Full Stack JS
        </Link>
        {' @ '}
        <Link href="https://www.altoroslabs.com" textColor="#22BAD9">
          Altoros
        </Link>
      </Text>
    </div>
  );
}
