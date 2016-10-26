import React from "react";

import {
  CodePane,
  Heading
} from "spectacle";

const config =
`$ git config --global user.name "NOMBRE"
$ git config --global user.email "EMAIL"
`;

export default function Config() {
  return (
    <div>
      <Heading size={2} textColor="tertiary">
        Configuración
      </Heading>
      <CodePane
        style={{fontSize: 22}}
        lang="bash"
        source={config}
        margin="30px auto"
      />
    </div>
  );
}
