import React from 'react';

export default function Metatags() {
  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='author' content='Gabriel França' />

      <meta property='og:site_name' content='My Default Project' />

      <meta
        name='description'
        content='My humble stack to build amazing things, developed with care and lots of love ready to put big projects on top.'
      />
      <meta name='keywords' content='Web, Development' />

      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />

      <link rel='shortcut icon' href='/fav-icon.svg' type='image/x-icon' />

      <meta
        property='og:image'
        itemProp='image'
        content='https://my-dp.vercel.app/_next/image?url=%2FshareImage.png&w=256&q=75'
      />
      <meta property='og:image:width' content='200' />
      <meta property='og:image:height' content='200' />
      <meta property='og:image:alt' content='MyDP Logo' />
      <meta property='og:image:type' content='image/png' />
      <meta
        property='og:description'
        content='My humble stack to build amazing things, developed with care and lots of love ready to put big projects on top.'
      />
    </>
  );
}

