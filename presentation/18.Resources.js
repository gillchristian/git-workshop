import React from "react";

import {
  Heading,
  Layout,
  Fill,
  Link
} from "spectacle";

const resources = [
  {
    text: 'Github Student Developer Pack',
    url: 'https://education.github.com/pack'
  },
  {
    text: 'Github Training',
    url: 'https://services.github.com/training/'
  },
  {
    text: 'Git Workflows',
    url: 'https://www.atlassian.com/git/tutorials/comparing-workflows'
  }
];

export default function Resources() {
  return (
    <div>
      <Heading size={2} margin="10px 10px 50px">
        Recursos útiles
      </Heading>
      {resources.map((item, key) => (
        <Link key={key} href={item.url} target="_blank">
          <Heading size={6} textColor="quaternary">{item.text}</Heading>
        </Link>
      ))}
      <Heading size={6} textColor="secondary">
        <Link href="https://github.com/jlord/git-it-electron" target="_blank" textColor="quaternary">
          git-it
        </Link>
        {' / '}
        <Link href="https://github.com/jlord/git-it-electron/releases" target="_blank" textColor="quaternary">
          download
        </Link>
      </Heading>
    </div>
  );
}
