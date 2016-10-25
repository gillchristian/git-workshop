import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const log =
`$ git log
`;

const options =
`$ git log --author=bob
$ git log --pretty=oneline
$ git log --graph --oneline --decorate --all
$ git log --name-status
$ git log --help
`;

export default function Logs() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Logs
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={log}
        margin="30px auto"
      />
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={options}
        margin="30px auto"
      />
    </div>
  );
}
