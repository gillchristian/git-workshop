import React from "react";

import {
  Heading,
  Link
} from "spectacle";

export default function Setup() {
  return (
    <div>
      <Heading caps textColor="primary">Setup</Heading>
      <Heading size={4}>
        <Link href="https://git-scm.com/download" target="_blank" textColor="quaternary">
          git-scm.com/download
        </Link>
      </Heading>
    </div>
  );
}
