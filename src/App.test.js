const { render, screen } = require("@testing-library/react");
import App from "./App";
test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText("First React test case");
  expect(text).toBeInTheDocument();
});
