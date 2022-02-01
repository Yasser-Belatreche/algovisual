import "@testing-library/jest-dom/extend-expect";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt="" />;
  },
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
  }),
}));
