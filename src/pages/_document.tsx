import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#8d633e' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        <meta property='og:title' content='Biscoitos da Lu' />
        <meta
          property='og:description'
          content='Cardápio de biscoitos caseiros da Lu. Encomende já!'
        />
        <meta property='og:url' content='https://lu-biscoitos.vercel.app/' />
        <meta property='og:site_name' content='Next.js' />
        <meta property='og:locale' content='pt_BR' />
        <meta
          property='og:image:url'
          itemProp='image'
          content='https://lu-biscoitos.vercel.app/og.png'
        />
        <meta property='og:image:width' content='256' />
        <meta property='og:image:height' content='256' />
        <meta property='og:type' content='website' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
