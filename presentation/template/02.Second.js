import React from "react";
import {
  Image,
  Heading
} from "spectacle";

export default function Second({image}) {
  return (
    <div>
      <Image
        src={image}
        margin="0px auto 40px"
        height="293px"
      />
      <Heading size={2} caps fit textColor="primary" textFont="primary">
        Wait what?
      </Heading>
    </div>
  );
}
