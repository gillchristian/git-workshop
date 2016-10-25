import React from "react";

import {
  CodePane,
  Image,
  Heading
} from "spectacle";

const branch =
`$ git checkout -b <branch-name>
$ git checkout master
$ git branch -d <branch-name>

$ git push origin <branch-name>
`;

export default function Branches({image}) {
  return (
    <div>
      <Heading size={4} textColor="tertiary">
        Branches
      </Heading>
      <Image src={image} width="80%"/>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={branch}
        margin="30px auto"
      />
    </div>
  );
}
