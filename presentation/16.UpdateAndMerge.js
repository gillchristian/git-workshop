import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const update =
`$ git pull <remote-name> <branch-name>
`;

const merge =
`$ git merge <branch-name>
# si hay confictos, resolver y
$ git add <file-name>
$ git diff <source-branch> <target-branch>
`;

export default function UpdateAndMerge() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Update & Merge
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={update}
        margin="30px auto"
      />
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={merge}
        margin="30px auto"
      />
    </div>
  );
}
