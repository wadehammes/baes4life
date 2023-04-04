import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { NextRouter } from "next/router";
import { PropsWithChildrenOnly } from "src/@types/react";
import { CSSRootVariables } from "src/styles/cssVariables";
import { GlobalStyles } from "src/styles/global";

const mockRouter: NextRouter = {
  basePath: "/",
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  locale: "",
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  forward: jest.fn(() => Promise.resolve(true)),
};

const Providers: FC<PropsWithChildrenOnly> = ({ children }) => (
  <RouterContext.Provider value={mockRouter}>
    <CSSRootVariables />
    <GlobalStyles />
    {children}
  </RouterContext.Provider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">,
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
