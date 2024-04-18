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

test("Testing input box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceholder = screen.getByPlaceholderText("enter username");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "Vishnu");
});
