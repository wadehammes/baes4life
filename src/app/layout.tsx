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
        <title>Jen and Wade's Wedding Site</title>
        <link rel="icon" href="favicon.webp" />
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
