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
        <title>Baes4Life - Jen and Wade's Wedding Site</title>
        <link rel="icon" href="favicon.webp" />
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
