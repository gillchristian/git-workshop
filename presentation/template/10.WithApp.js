import React from "react";

import {
  Heading
} from "spectacle";

// Import custom component
import Interactive from "../../assets/interactive";

export default function Component() {
  return (
    <div>
      <Heading size={1} caps fit textColor="tertiary">
        Your presentations are interactive
      </Heading>
      <Interactive />
    </div>
  );
}
