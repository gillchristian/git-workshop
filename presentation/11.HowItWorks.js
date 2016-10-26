import React from "react";

import {
  Heading,
  Image
} from "spectacle";

export default function HowItWorks({image}) {
  return (
    <div>
      <Heading margin="0 auto 30px">Repositorios</Heading>
      <Image src={image} />
    </div>
  );
}
