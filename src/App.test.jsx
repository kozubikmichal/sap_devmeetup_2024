import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders the App", () => {
  render(<App>App Content</App>);
  expect(screen.getByText("App Content")).toBeInTheDocument();
});
