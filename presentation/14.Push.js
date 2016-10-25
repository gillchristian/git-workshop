import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const push =
`$ git push origin master
# git push <remote-name> <branch>
# git push <remote-name> <local-branch>:<remote-branch>
`;

const addRemote =
`$ git remote add origin https://github.com/johndoe/my-repo.git
$ git remote add <remote-name> <remote-url>
`;

export default function Push() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Push & Remote
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={push}
        margin="30px auto"
      />
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={addRemote}
        margin="30px auto"
      />
    </div>
  );
}
