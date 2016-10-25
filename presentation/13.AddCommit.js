import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const add =
`$ git add <file-name>
$ git add <directory-path>
$ git add *
`;

const commit =
`$ git commit -m "Mensaje del commit"
`;

export default function AddCommit() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Add & Commit
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={add}
        margin="30px auto"
      />
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={commit}
        margin="30px auto"
      />
    </div>
  );
}
