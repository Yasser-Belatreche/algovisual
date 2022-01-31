import "../src/styles/globals.scss";

import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
