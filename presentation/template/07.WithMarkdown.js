import React from "react";

import {
  Heading,
  Markdown
} from "spectacle";

export default function WithMarkdown({image}) {
  return (
    <div>
      <Heading caps fit size={1} >
        Inline Markdown
      </Heading>
      <Markdown>{content(image)}</Markdown>
    </div>
  );
}

function content(image){
  return         `
![Markdown Logo](${image})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
        `
}
