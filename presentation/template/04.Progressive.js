import React from "react";

import {
  Appear,
  Heading
} from "spectacle";

export default function Progressive() {
  return (
    <div>
      <Appear fid="1">
        <Heading size={1} caps fit textColor="primary">
          Full Width
        </Heading>
      </Appear>
      <Appear fid="2">
        <Heading size={1} caps fit textColor="tertiary">
          Adjustable Darkness
        </Heading>
      </Appear>
      <Appear fid="3">
        <Heading size={1} caps fit textColor="primary">
          Background Imagery
        </Heading>
      </Appear>
    </div>
  );
}
