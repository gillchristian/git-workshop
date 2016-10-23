import React from "react";

import {
  Heading,
  Appear,
  Link
} from "spectacle";

const clients = [
  {
    url: "https://www.gitkraken.com/",
    text: "GitKraken"
  },
  {
    url: "https://www.sourcetreeapp.com/",
    text: "SourceTree"
  },
  {
    url: "https://desktop.github.com/",
    text: "Github Desktop"
  },
  {
    url: "http://www.syntevo.com/smartgit/",
    text: "SmartGit"
  },
  {
    url: "https://code.visualstudio.com/",
    text: "Visual Studio Code"
  },
]

export default function Clients() {
  return (
    <div>
      <Appear>
        <Heading caps textColor="primary">Clientes</Heading>
      </Appear>
      <Appear>
        <div>
          {
            clients.map((item, key) => (
              <Heading key={key} size={5}>
                <Link href={item.url} target="_blank" textColor="quaternary">
                  {item.text}
                </Link>
              </Heading>
            ))
          }
        </div>
      </Appear>
    </div>
  );
}
