"use client";

import StyledComponentsRegistry from "src/lib/registry";
import { CSSRootVariables } from "src/styles/cssVariables";
import { GlobalStyles } from "src/styles/global";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>
          Jen and Wade's Wedding Site - April 21st, 2024 - Jupiter, FL
        </title>
        <link rel="icon" href="favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Belanosima:wght@400;700&family=Source+Sans+3:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Jen and Wade - April 21st, 2024 - Jupiter, FL"
        />
        <meta property="og:url" content="https://www.jenandwade.com" />
        <meta
          property="og:image"
          content="https://www.jenandwade.com/images/og.png"
        />
        <meta
          property="og:description"
          content="Jen and wade are saying 'I do' on April 21st, 2024 in Jupiter, FL."
        ></meta>
      </head>
      <body>
        <StyledComponentsRegistry>
          <CSSRootVariables />
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
