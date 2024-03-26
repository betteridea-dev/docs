import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
import Script from 'next/script'

const headProp = () => {
  return (
    <head>
      <title>BetterIDEa Developer Docs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="BetterIDEa Developer Docs" />
      <meta
        name="description"
        content="BetterIDEa Developer Docs"
      />
      <meta
        property="og:description"
        content={'BetterIDEa Developer Docs'}
      />
      <meta property="og:image" content='assets/images/logo/main.svg' />
      <meta property="og:url" content='https://ide.betteridea.dev' />
      <meta property="og:title" content='BetterIDEa' />
      <meta property="twitter:image" content="https://raw.githubusercontent.com/betteridea-dev/ide/main/app/public/logo.png"></meta>
      <meta property="twitter:title" content="BetterIDEa Developer Docs"></meta>
      <meta property="twitter:description" content="BetterIDEa Developer Docs"></meta>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V1XZ5N5L48"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-V1XZ5N5L48');
        `}
      </Script>
    </head>
  )
}

const config: DocsThemeConfig = {
  logo: <Image src="https://raw.githubusercontent.com/betteridea-dev/ide/main/app/public/logo.png" alt="logo" height={50} width={140} />,
  project: {
    link: 'https://github.com/betteridea-dev',
  },
  chat: {
    link: 'https://discord.gg/nm6VKUQBrA',
  },
  docsRepositoryBase: 'https://github.com/betteridea-dev/docs',
  head: headProp,
  footer: {
    text: 'BetterIDEa Documentation',
  },
  faviconGlyph: "⚙️"
}

export default config
