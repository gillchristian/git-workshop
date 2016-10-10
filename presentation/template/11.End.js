import React from "react";

import {
  Heading,
  Link,
  Image
} from "spectacle";

export default function End({image}) {
  return (
    <div>
      <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
        Made with love in Seattle by
      </Heading>
      <Link href="http://www.formidablelabs.com">
        <Image width="100%" src={image}/>
      </Link>
    </div>
  );
}
