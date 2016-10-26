import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const local =
`$ mkdir my-project
$ cd my-project
$ git init
`;

const remote =
`$ git clone /path/to/local/repo my-project
# o
$ git clone username@host:/path/to/remote/repo my-project
$ cd my-project
`;

export default function Create() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Crear y Clonar
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={local}
        margin="30px auto"
      />
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={remote}
        margin="30px auto"
      />
    </div>
  );
}
