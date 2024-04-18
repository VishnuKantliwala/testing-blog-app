const { render, screen } = require("@testing-library/react");
import App from "./App";
test("Test First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React test case/i);
  const text2 = screen.getByText(/Vishnu/i);
  const title = screen.getByTitle("Dog image");

  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
